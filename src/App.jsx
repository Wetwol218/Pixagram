import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import Auth from './Auth.jsx'

const deletePost = async (postId) => {
  const { error } = await supabase.from('posts').delete().eq('id', postId)
  return !error
}

const toggleReaction = async (postId, userId, type) => {
  const { data: existing } = await supabase
    .from('reactions')
    .select('id')
    .eq('post_id', postId)
    .eq('user_id', userId)
    .eq('type', type)
    .single()

  if (existing) {
    await supabase.from('reactions').delete().eq('id', existing.id)
  } else {
    await supabase.from('reactions').insert({ post_id: postId, user_id: userId, type })
  }
  return !existing
}

const addComment = async (postId, userId, userName, text) => {
  if (!text.trim()) return false
  const { error } = await supabase
    .from('comments')
    .insert({ post_id: postId, user_id: userId, user_name: userName, text })
  return !error
}

const uploadPost = async (file, userId, userName) => {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`

  const { error: uploadError } = await supabase.storage
    .from('photos')
    .upload(fileName, file)

  if (uploadError) {
    console.error('Error al subir foto:', uploadError)
    return null
  }

  const { data } = supabase.storage.from('photos').getPublicUrl(fileName)

  const { error: dbError } = await supabase.from('posts').insert({
    user_id: userId,
    user_name: userName,
    image_url: data.publicUrl,
    created_at: new Date().toISOString(),
  })

  if (dbError) console.error('Error al guardar post:', dbError)
  return data.publicUrl
}

export default function App() {
  const [session, setSession] = useState(undefined) // undefined = cargando, null = sin sesión
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState({})
  const [commentTexts, setCommentTexts] = useState({}) // guarda el texto siendo escrito por post

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.subscription.unsubscribe()
  }, [])

  // Cargar posts desde Supabase
  useEffect(() => {
    const loadPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*, reactions(*)')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error al cargar posts:', error)
        return
      }

      setPosts(data || [])
    }

    if (session) loadPosts()
  }, [session])

  // Cargar comentarios por post
  useEffect(() => {
    const loadComments = async () => {
      if (posts.length === 0) return

      const postIds = posts.map(p => p.id)
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .in('post_id', postIds)
        .order('created_at', { ascending: true })

      if (error) {
        console.error('Error al cargar comentarios:', error)
        return
      }

      const commentsByPost = {}
      data?.forEach(comment => {
        if (!commentsByPost[comment.post_id]) {
          commentsByPost[comment.post_id] = []
        }
        commentsByPost[comment.post_id].push(comment)
      })
      setComments(commentsByPost)
    }

    loadComments()
  }, [posts])

  if (session === undefined) return null

  if (!session) {
    return <Auth />
  }

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <h1>Pixagram 📸</h1>
        <button
          className="logout"
          onClick={() => supabase.auth.signOut()}
        >
          Cerrar sesión
        </button>
      </header>

      {/* MAIN FEED */}
      <main className="feed">

        <section className="uploadCard">
          <label htmlFor="fileInput">📷 Seleccionar foto</label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={async (e) => {
              const file = e.target.files?.[0]
              if (file) {
                const userName = session.user.user_metadata?.nombre || 'Usuario'
                const url = await uploadPost(file, session.user.id, userName)
                if (url) {
                  const newPost = {
                    id: Date.now(),
                    user_id: session.user.id,
                    user_name: userName,
                    image_url: url,
                    created_at: new Date().toISOString(),
                    reactions: []
                  }
                  setPosts([newPost, ...posts])
                }
                e.target.value = ''
              }
            }}
          />
          <button type="button" onClick={() => document.getElementById('fileInput').click()}>
            Publicar foto
          </button>
        </section>

        {posts.length === 0 ? (
          <div className="empty">
            <span>📸</span>
            <h3>No hay publicaciones</h3>
            <p>¡Sé el primero en subir una foto!</p>
          </div>
        ) : (
          <section className="posts">
            {posts.map(post => (
              <article className="post" key={post.id}>

                <div className="postHeader">
                  <div className="postUser">
                    <div className="avatar">{post.user_name?.[0] || 'U'}</div>
                    <div>
                      <strong>{post.user_name || 'Usuario'}</strong>
                      <small>{new Date(post.created_at).toLocaleString()}</small>
                    </div>
                  </div>
                  {post.user_id === session.user.id && (
                    <button type="button" className="deleteButton" onClick={async () => {
                      const success = await deletePost(post.id)
                      if (success) {
                        setPosts(posts.filter(p => p.id !== post.id))
                      } else {
                        console.error('Error al eliminar post')
                      }
                    }}>🗑️ Eliminar</button>
                  )}
                </div>

                <img className="postImage" src={post.image_url} alt="Publicación" />

                <div className="actions">
                  <button type="button" onClick={async () => {
                    const isAdding = await toggleReaction(post.id, session.user.id, 'like')
                    const reactions = post.reactions || []
                    const updated = isAdding
                      ? [...reactions, { type: 'like', user_id: session.user.id, post_id: post.id }]
                      : reactions.filter(r => !(r.type === 'like' && r.user_id === session.user.id))
                    setPosts(posts.map(p => p.id === post.id ? { ...p, reactions: updated } : p))
                  }}>
                    ❤️
                    <span>{post.reactions?.filter(r => r.type === "like").length || 0}</span>
                  </button>
                  <button type="button" onClick={async () => {
                    const isAdding = await toggleReaction(post.id, session.user.id, 'dislike')
                    const reactions = post.reactions || []
                    const updated = isAdding
                      ? [...reactions, { type: 'dislike', user_id: session.user.id, post_id: post.id }]
                      : reactions.filter(r => !(r.type === 'dislike' && r.user_id === session.user.id))
                    setPosts(posts.map(p => p.id === post.id ? { ...p, reactions: updated } : p))
                  }}>
                    👎
                    <span>{post.reactions?.filter(r => r.type === "dislike").length || 0}</span>
                  </button>
                  <button type="button">
                    💬
                    <span>{comments[post.id]?.length || 0}</span>
                  </button>
                </div>

                <div className="comments">
                  {comments[post.id]?.map(comment => (
                    <div className="comment" key={comment.id}>
                      <div className="commentAvatar">{comment.user_name?.[0] || 'U'}</div>
                      <div className="commentContent">
                        <strong>{comment.user_name || 'Usuario'}</strong>
                        <p>{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="commentInput">
                  <input
                    type="text"
                    placeholder="Escribe un comentario..."
                    maxLength={500}
                    value={commentTexts[post.id] || ''}
                    onChange={(e) => setCommentTexts({ ...commentTexts, [post.id]: e.target.value })}
                  />
                  <button type="button" onClick={async () => {
                    const text = commentTexts[post.id]
                    if (!text.trim()) return
                    const userName = session.user.user_metadata?.nombre || 'Usuario'
                    const newComment = { id: Date.now(), post_id: post.id, user_id: session.user.id, user_name: userName, text }
                    setComments({ ...comments, [post.id]: [...(comments[post.id] || []), newComment] })
                    setCommentTexts({ ...commentTexts, [post.id]: '' })
                    const success = await addComment(post.id, session.user.id, userName, text)
                    if (!success) {
                      setComments({ ...comments, [post.id]: (comments[post.id] || []).slice(0, -1) })
                    }
                  }}>Publicar</button>
                </div>

              </article>
            ))}
          </section>
        )}

      </main>
    </div>
  )
}
