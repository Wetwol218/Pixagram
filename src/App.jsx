import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import Auth from './Auth.jsx'

export default function App() {
  const [session, setSession] = useState(undefined) // undefined = cargando, null = sin sesión
  const [posts, setPosts] = useState([]) // TODO: COMPONENTE DE LOOP - cargar posts desde Supabase
  const [comments, setComments] = useState({}) // TODO: almacenar comentarios por post_id

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.subscription.unsubscribe()
  }, [])

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

        {/* TODO 3: COMPONENTE DE SUBIDA - Agregar componente para seleccionar y subir imágenes a Supabase Storage */}
        {/* Usa supabase.storage.from("photos").upload() */}
        <section className="uploadCard">
          <label>📷 Seleccionar foto</label>
          {/* input file y botón de publicar irán aquí */}
        </section>

        {/* TODO 1: LOOP DE POSTS - Cargar posts desde la tabla 'posts' en Supabase */}
        {/* Escucha cambios en tiempo real si quieres */}
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

                {/* TODO 2: COMPONENTE DE POST - Mostrar imagen, usuario y fecha */}
                <div className="postHeader">
                  <div className="postUser">
                    <div className="avatar">P</div>
                    <div>
                      <strong>Usuario</strong>
                      <small>{new Date(post.created_at).toLocaleString()}</small>
                    </div>
                  </div>
                  {/* TODO 4: BOTÓN DE ELIMINAR - Solo visible si es el dueño del post */}
                  {post.user_id === session.user.id && (
                    <button className="deleteButton">🗑️ Eliminar</button>
                  )}
                </div>

                {/* Imagen del post */}
                <img className="postImage" src={post.image_url} alt="Publicación" />

                {/* TODO 5: ACCIONES - Like/Dislike con contadores */}
                <div className="actions">
                  <button>
                    ❤️
                    <span>{post.reactions?.filter(r => r.type === "like").length || 0}</span>
                  </button>
                  <button>
                    👎
                    <span>{post.reactions?.filter(r => r.type === "dislike").length || 0}</span>
                  </button>
                  <button>
                    💬
                    <span>{comments[post.id]?.length || 0}</span>
                  </button>
                </div>

                {/* TODO 6: SECCIÓN DE COMENTARIOS - Mostrar y agregar comentarios */}
                <div className="comments">
                  {comments[post.id]?.map(comment => (
                    <div className="comment" key={comment.id}>
                      <div className="commentAvatar">P</div>
                      <div className="commentContent">
                        <strong>Usuario</strong>
                        <p>{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="commentInput">
                  <input type="text" placeholder="Escribe un comentario..." maxLength={500} />
                  <button>Publicar</button>
                </div>

              </article>
            ))}
          </section>
        )}

      </main>
    </div>
  )
}
