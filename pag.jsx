// import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";



// const SUPABASE_URL = "https://cecxhcyriysaxaczxwry.supabase.co";
// const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_zNYsiE-yDyHV0c5GBQTIFA_iWgB24KT";

// const supabase = createClient(
//   SUPABASE_URL,
//   SUPABASE_PUBLISHABLE_KEY
// );




// const styles = `
// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }

// body {
//   font-family:
//     Inter,
//     -apple-system,
//     BlinkMacSystemFont,
//     "Segoe UI",
//     sans-serif;

//   background:
//     linear-gradient(
//       135deg,
//       #fdf497 0%,
//       #fdf497 5%,
//       #fd5949 40%,
//       #d6249f 70%,
//       #285AEB 100%
//     );

//   min-height: 100vh;
// }

// button,
// input {
//   font-family: inherit;
// }

// button {
//   cursor: pointer;
// }

// .app {
//   min-height: 100vh;
// }



// .header {
//   position: sticky;
//   top: 0;
//   z-index: 100;

//   height: 75px;

//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   padding: 0 30px;

//   background: rgba(255, 255, 255, 0.94);

//   backdrop-filter: blur(18px);

//   border-bottom: 1px solid rgba(0, 0, 0, 0.08);
// }

// .logo {
//   display: flex;
//   align-items: center;
//   gap: 12px;
// }

// .logo h1 {
//   font-size: 27px;
//   font-weight: 850;

//   background:
//     linear-gradient(
//       45deg,
//       #feda75,
//       #fa7e1e,
//       #d62976,
//       #962fbf,
//       #4f5bd5
//     );

//   -webkit-background-clip: text;
//   background-clip: text;

//   color: transparent;
// }

// .logoIcon {
//   width: 40px;
//   height: 40px;

//   border-radius: 12px;

//   background:
//     linear-gradient(
//       45deg,
//       #feda75,
//       #fa7e1e,
//       #d62976,
//       #962fbf,
//       #4f5bd5
//     );

//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .logoIcon span {
//   width: 22px;
//   height: 22px;

//   border: 3px solid white;

//   border-radius: 7px;

//   position: relative;
// }

// .logoIcon span::before {
//   content: "";

//   position: absolute;

//   width: 6px;
//   height: 6px;

//   background: white;

//   border-radius: 50%;

//   left: 50%;
//   top: 50%;

//   transform: translate(-50%, -50%);
// }

// .logoIcon span::after {
//   content: "";

//   position: absolute;

//   width: 4px;
//   height: 4px;

//   background: white;

//   border-radius: 50%;

//   right: 2px;
//   top: 2px;
// }

// .header p {
//   color: #777;
//   font-size: 14px;
// }




// .feed {
//   width: min(650px, 94%);

//   margin: auto;

//   padding: 35px 0 80px;
// }




// .welcome {
//   text-align: center;

//   color: white;

//   margin-bottom: 25px;
// }

// .welcome h2 {
//   font-size: 30px;

//   margin-bottom: 8px;
// }

// .welcome p {
//   opacity: 0.92;
// }


// .uploadCard {
//   background: rgba(255, 255, 255, 0.97);

//   border-radius: 18px;

//   padding: 20px;

//   margin-bottom: 25px;

//   box-shadow:
//     0 10px 35px rgba(0, 0, 0, 0.13);
// }

// #photoInput {
//   display: none;
// }

// .uploadButton {
//   display: block;

//   text-align: center;

//   padding: 14px;

//   border-radius: 12px;

//   color: white;

//   font-weight: 750;

//   background:
//     linear-gradient(
//       45deg,
//       #feda75,
//       #fa7e1e,
//       #d62976,
//       #962fbf,
//       #4f5bd5
//     );

//   transition: 0.2s;
// }

// .uploadButton:hover {
//   transform: translateY(-2px);
//   filter: brightness(1.05);
// }

// .selectedFile {
//   margin-top: 15px;

//   display: flex;

//   align-items: center;

//   justify-content: space-between;

//   gap: 10px;
// }

// .selectedFile span {
//   overflow: hidden;

//   text-overflow: ellipsis;

//   white-space: nowrap;

//   color: #555;
// }

// .publishButton {
//   border: none;

//   padding: 10px 18px;

//   border-radius: 10px;

//   background: #0095f6;

//   color: white;

//   font-weight: 700;
// }

// .publishButton:disabled {
//   opacity: 0.6;
//   cursor: not-allowed;
// }




// .post {
//   background: white;

//   border-radius: 18px;

//   overflow: hidden;

//   margin-bottom: 28px;

//   box-shadow:
//     0 10px 35px rgba(0, 0, 0, 0.15);

//   animation: appear 0.35s ease;
// }

// @keyframes appear {
//   from {
//     opacity: 0;
//     transform: translateY(15px);
//   }

//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// .postHeader {
//   height: 65px;

//   padding: 12px 16px;

//   display: flex;

//   align-items: center;

//   justify-content: space-between;
// }

// .postUser {
//   display: flex;

//   align-items: center;

//   gap: 12px;
// }

// .avatar {
//   width: 40px;
//   height: 40px;

//   border-radius: 50%;

//   display: flex;

//   align-items: center;
//   justify-content: center;

//   color: white;

//   font-weight: 800;

//   background:
//     linear-gradient(
//       45deg,
//       #fa7e1e,
//       #d62976,
//       #962fbf
//     );
// }

// .postUser strong {
//   display: block;

//   font-size: 14px;
// }

// .postUser small {
//   display: block;

//   color: #999;

//   margin-top: 2px;
// }




// .deleteButton {
//   border: none;

//   background: transparent;

//   color: #ed4956;

//   font-size: 13px;

//   font-weight: 700;

//   padding: 8px;

//   border-radius: 8px;

//   transition: 0.2s;
// }

// .deleteButton:hover {
//   background: #fff0f1;
// }



// .postImage {
//   display: block;

//   width: 100%;

//   max-height: 700px;

//   object-fit: cover;

//   background: #eee;
// }




// .actions {
//   display: flex;

//   align-items: center;

//   gap: 7px;

//   padding: 12px 15px;
// }

// .actions button {
//   border: none;

//   background: transparent;

//   display: flex;

//   align-items: center;

//   gap: 6px;

//   padding: 8px 11px;

//   border-radius: 10px;

//   font-size: 20px;

//   transition: 0.18s;
// }

// .actions button:hover {
//   background: #f3f3f3;

//   transform: translateY(-1px);
// }

// .actions button.active {
//   background: #f1f1f1;

//   transform: scale(1.04);
// }

// .actions .active.like {
//   background: #fff0f3;
// }

// .actions .active.dislike {
//   background: #f0f0f0;
// }

// .actions span {
//   font-size: 14px;

//   color: #555;

//   font-weight: 700;
// }




// .comments {
//   padding: 0 15px;
// }

// .comment {
//   display: flex;

//   gap: 9px;

//   margin-bottom: 12px;
// }

// .commentAvatar {
//   width: 30px;
//   height: 30px;

//   min-width: 30px;

//   border-radius: 50%;

//   display: flex;

//   align-items: center;

//   justify-content: center;

//   color: white;

//   font-size: 12px;

//   font-weight: 800;

//   background:
//     linear-gradient(
//       45deg,
//       #fa7e1e,
//       #d62976,
//       #962fbf
//     );
// }

// .commentContent {
//   background: #f5f5f5;

//   border-radius: 12px;

//   padding: 8px 11px;
// }

// .commentContent strong {
//   font-size: 13px;
// }

// .commentContent p {
//   color: #444;

//   font-size: 14px;

//   margin-top: 2px;

//   word-break: break-word;
// }



// .commentInput {
//   border-top: 1px solid #eee;

//   display: flex;

//   padding: 12px;
// }

// .commentInput input {
//   flex: 1;

//   border: none;

//   outline: none;

//   padding: 9px 10px;

//   font-size: 14px;

//   background: transparent;
// }

// .commentInput button {
//   border: none;

//   background: transparent;

//   color: #0095f6;

//   font-weight: 750;
// }



// .empty {
//   background: white;

//   border-radius: 18px;

//   text-align: center;

//   padding: 60px 20px;

//   box-shadow:
//     0 10px 30px rgba(0, 0, 0, 0.12);
// }

// .empty span {
//   font-size: 50px;
// }

// .empty h3 {
//   margin-top: 15px;
// }

// .empty p {
//   color: #888;

//   margin-top: 5px;
// }



// .loading {
//   text-align: center;

//   color: white;

//   font-size: 18px;

//   padding: 50px;
// }




// @media (max-width: 600px) {

//   .header {
//     padding: 0 15px;
//   }

//   .header p {
//     display: none;
//   }

//   .feed {
//     width: 100%;

//     padding-top: 25px;
//   }

//   .welcome {
//     padding: 0 15px;
//   }

//   .welcome h2 {
//     font-size: 25px;
//   }

//   .uploadCard {
//     margin-left: 10px;
//     margin-right: 10px;
//   }

//   .post {
//     border-radius: 0;
//   }

//   .selectedFile {
//     flex-direction: column;

//     align-items: stretch;
//   }

//   .publishButton {
//     width: 100%;
//   }
// }
// `;




// export default function App() {

//   const [user, setUser] = useState(null);

//   const [posts, setPosts] = useState([]);

//   const [comments, setComments] = useState({});

//   const [commentText, setCommentText] = useState({});

//   const [selectedFile, setSelectedFile] = useState(null);

//   const [uploading, setUploading] = useState(false);

//   const [loading, setLoading] = useState(true);

//   const [processingReaction, setProcessingReaction] = useState(null);




//   useEffect(() => {

//     inicializarUsuario();

//   }, []);


//   async function inicializarUsuario() {

//     const {
//       data: {
//         session
//       }
//     } = await supabase.auth.getSession();


//     if (session?.user) {

//       setUser(session.user);

//       cargarPosts();

//       return;
//     }


//     const {
//       data,
//       error
//     } = await supabase.auth.signInAnonymously();


//     if (error) {

//       console.error(error);

//       alert(
//         "No se pudo iniciar el usuario anónimo. " +
//         "Activa Anonymous Sign-Ins en Supabase."
//       );

//       return;
//     }


//     setUser(data.user);

//     cargarPosts();
//   }



//   async function cargarPosts() {

//     setLoading(true);


//     const {
//       data,
//       error
//     } = await supabase
//       .from("posts")
//       .select(`
//         *,
//         reactions (
//           user_id,
//           type
//         )
//       `)
//       .order(
//         "created_at",
//         {
//           ascending: false
//         }
//       );


//     if (error) {

//       console.error(error);

//       setLoading(false);

//       return;
//     }


//     setPosts(data || []);


//     for (const post of data || []) {

//       cargarComentarios(post.id);

//     }


//     setLoading(false);
//   }




//   async function cargarComentarios(postId) {

//     const {
//       data,
//       error
//     } = await supabase
//       .from("comments")
//       .select("*")
//       .eq(
//         "post_id",
//         postId
//       )
//       .order(
//         "created_at",
//         {
//           ascending: true
//         }
//       );


//     if (error) {

//       console.error(error);

//       return;
//     }


//     setComments(
//       previous => ({
//         ...previous,

//         [postId]: data || []
//       })
//     );
//   }



//   async function subirFoto() {

//     if (!selectedFile || !user) {
//       return;
//     }


//     if (!selectedFile.type.startsWith("image/")) {

//       alert("Solo puedes subir imágenes.");

//       return;
//     }


//     if (selectedFile.size > 10 * 1024 * 1024) {

//       alert(
//         "La imagen no puede superar los 10 MB."
//       );

//       return;
//     }


//     setUploading(true);


//     try {

//       const extension =
//         selectedFile.name
//           .split(".")
//           .pop()
//           .toLowerCase();


//       const fileName =
//         `${user.id}/${crypto.randomUUID()}.${extension}`;


//       const {
//         error: uploadError
//       } = await supabase.storage
//         .from("photos")
//         .upload(
//           fileName,
//           selectedFile,
//           {
//             cacheControl: "3600",
//             upsert: false
//           }
//         );


//       if (uploadError) {

//         console.error(uploadError);

//         alert(
//           "No se pudo subir la imagen."
//         );

//         return;
//       }


//       const {
//         data: publicData
//       } = supabase.storage
//         .from("photos")
//         .getPublicUrl(fileName);


//       const {
//         error: postError
//       } = await supabase
//         .from("posts")
//         .insert({
//           user_id: user.id,

//           image_url:
//             publicData.publicUrl,

//           storage_path:
//             fileName
//         });


//       if (postError) {

//         console.error(postError);

//         alert(
//           "La imagen se subió, pero no se pudo crear la publicación."
//         );

//         return;
//       }


//       setSelectedFile(null);


//       const input =
//         document.getElementById(
//           "photoInput"
//         );


//       if (input) {

//         input.value = "";

//       }


//       await cargarPosts();

//     } finally {

//       setUploading(false);

//     }
//   }




//   async function reaccionar(post, tipo) {

//     if (!user) {
//       return;
//     }


//     if (processingReaction === post.id) {
//       return;
//     }


//     setProcessingReaction(post.id);


//     try {

//       const reaccionActual =
//         post.reactions?.find(
//           reaction =>
//             reaction.user_id === user.id
//         );




//       if (
//         reaccionActual &&
//         reaccionActual.type === tipo
//       ) {

//         const {
//           error
//         } = await supabase
//           .from("reactions")
//           .delete()
//           .eq(
//             "post_id",
//             post.id
//           )
//           .eq(
//             "user_id",
//             user.id
//           );


//         if (error) {

//           console.error(error);

//           return;
//         }

//       }



//       else if (reaccionActual) {

//         const {
//           error
//         } = await supabase
//           .from("reactions")
//           .update({
//             type: tipo
//           })
//           .eq(
//             "post_id",
//             post.id
//           )
//           .eq(
//             "user_id",
//             user.id
//           );


//         if (error) {

//           console.error(error);

//           return;
//         }

//       }



//       else {

//         const {
//           error
//         } = await supabase
//           .from("reactions")
//           .insert({
//             post_id: post.id,

//             user_id: user.id,

//             type: tipo
//           });


//         if (error) {

//           console.error(error);

//           return;
//         }

//       }


//       await cargarPosts();

//     } finally {

//       setProcessingReaction(null);

//     }
//   }




//   async function eliminarPost(post) {

//     if (!user) {
//       return;
//     }


//     if (post.user_id !== user.id) {

//       alert(
//         "Solo el dueño de esta publicación puede eliminarla."
//       );

//       return;
//     }


//     const confirmar =
//       window.confirm(
//         "¿Seguro que quieres eliminar esta foto?"
//       );


//     if (!confirmar) {
//       return;
//     }




//     if (post.storage_path) {

//       const {
//         error: storageError
//       } = await supabase.storage
//         .from("photos")
//         .remove([
//           post.storage_path
//         ]);


//       if (storageError) {

//         console.error(
//           storageError
//         );

//       }
//     }


//     const {
//       error
//     } = await supabase
//       .from("posts")
//       .delete()
//       .eq(
//         "id",
//         post.id
//       );


//     if (error) {

//       console.error(error);

//       alert(
//         "No se pudo eliminar la publicación."
//       );

//       return;
//     }


//     setPosts(
//       previous =>
//         previous.filter(
//           p => p.id !== post.id
//         )
//     );
//   }



//   async function agregarComentario(postId) {

//     if (!user) {
//       return;
//     }


//     const texto =
//       commentText[postId]?.trim();


//     if (!texto) {
//       return;
//     }


//     if (texto.length > 500) {

//       alert(
//         "El comentario no puede superar los 500 caracteres."
//       );

//       return;
//     }


//     const {
//       error
//     } = await supabase
//       .from("comments")
//       .insert({
//         post_id: postId,

//         user_id: user.id,

//         text: texto
//       });


//     if (error) {

//       console.error(error);

//       alert(
//         "No se pudo publicar el comentario."
//       );

//       return;
//     }


//     setCommentText(
//       previous => ({
//         ...previous,

//         [postId]: ""
//       })
//     );


//     await cargarComentarios(postId);
//   }




//   function obtenerReaccion(post) {

//     if (!user) {
//       return null;
//     }


//     const reaction =
//       post.reactions?.find(
//         r =>
//           r.user_id === user.id
//       );


//     return reaction?.type || null;
//   }


//   return (
//     <>
//       <style>
//         {styles}
//       </style>


//       <div className="app">

//         {/* HEADER */}

//         <header className="header">

//           <div className="logo">

//             <div className="logoIcon">
//               <span></span>
//             </div>

//             <h1>
//               Pixagram
//             </h1>

//           </div>


//           <p>
//             Comparte tus momentos
//           </p>

//         </header>




//         <main className="feed">



//           <section className="welcome">

//             <h2>
//               Bienvenido a Pixagram
//             </h2>

//             <p>
//               Comparte tus fotos y descubre
//               las publicaciones de los demás.
//             </p>

//           </section>



//           <section className="uploadCard">

//             <label
//               htmlFor="photoInput"
//               className="uploadButton"
//             >
//               📷 Seleccionar foto
//             </label>


//             <input
//               id="photoInput"
//               type="file"
//               accept="image/*"
//               onChange={
//                 event =>
//                   setSelectedFile(
//                     event.target.files?.[0] || null
//                   )
//               }
//             />


//             {selectedFile && (

//               <div className="selectedFile">

//                 <span>
//                   {selectedFile.name}
//                 </span>


//                 <button
//                   className="publishButton"
//                   onClick={subirFoto}
//                   disabled={uploading}
//                 >
//                   {uploading
//                     ? "Subiendo..."
//                     : "Publicar"}
//                 </button>

//               </div>

//             )}

//           </section>




//           {loading ? (

//             <div className="loading">
//               Cargando Pixagram...
//             </div>

//           ) : posts.length === 0 ? (

//             <div className="empty">

//               <span>
//                 📸
//               </span>

//               <h3>
//                 Aún no hay publicaciones
//               </h3>

//               <p>
//                 ¡Sé el primero en subir una foto!
//               </p>

//             </div>

//           ) : (

//             <section className="posts">

//               {posts.map(post => {

//                 const myReaction =
//                   obtenerReaccion(post);


//                 return (

//                   <article
//                     className="post"
//                     key={post.id}
//                   >


//                     {/* HEADER POST */}

//                     <div className="postHeader">

//                       <div className="postUser">

//                         <div className="avatar">
//                           P
//                         </div>


//                         <div>

//                           <strong>
//                             Usuario de Pixagram
//                           </strong>

//                           <small>
//                             {new Date(
//                               post.created_at
//                             ).toLocaleString()}
//                           </small>

//                         </div>

//                       </div>




//                       {post.user_id === user?.id && (

//                         <button
//                           className="deleteButton"
//                           onClick={() =>
//                             eliminarPost(post)
//                           }
//                         >
//                           🗑️ Eliminar
//                         </button>

//                       )}

//                     </div>




//                     <img
//                       className="postImage"
//                       src={post.image_url}
//                       alt="Publicación"
//                     />



//                     <div className="actions">

//                       <button
//                         className={
//                           myReaction === "like"
//                             ? "active like"
//                             : ""
//                         }
//                         onClick={() =>
//                           reaccionar(
//                             post,
//                             "like"
//                           )
//                         }
//                         disabled={
//                           processingReaction ===
//                           post.id
//                         }
//                       >

//                         ❤️

//                         <span>
//                           {
//                             post.reactions?.filter(
//                               r =>
//                                 r.type === "like"
//                             ).length || 0
//                           }
//                         </span>

//                       </button>


//                       <button
//                         className={
//                           myReaction === "dislike"
//                             ? "active dislike"
//                             : ""
//                         }
//                         onClick={() =>
//                           reaccionar(
//                             post,
//                             "dislike"
//                           )
//                         }
//                         disabled={
//                           processingReaction ===
//                           post.id
//                         }
//                       >

//                         👎

//                         <span>
//                           {
//                             post.reactions?.filter(
//                               r =>
//                                 r.type === "dislike"
//                             ).length || 0
//                           }
//                         </span>

//                       </button>


//                       <button
//                         onClick={() => {

//                           document
//                             .getElementById(
//                               `comment-${post.id}`
//                             )
//                             ?.focus();

//                         }}
//                       >

//                         💬

//                         <span>
//                           {
//                             comments[post.id]
//                               ?.length || 0
//                           }
//                         </span>

//                       </button>

//                     </div>




//                     <div className="comments">

//                       {comments[post.id]?.map(
//                         comment => (

//                           <div
//                             className="comment"
//                             key={comment.id}
//                           >

//                             <div className="commentAvatar">
//                               P
//                             </div>


//                             <div className="commentContent">

//                               <strong>
//                                 Usuario
//                               </strong>

//                               <p>
//                                 {comment.text}
//                               </p>

//                             </div>

//                           </div>

//                         )
//                       )}

//                     </div>




//                     <div className="commentInput">

//                       <input
//                         id={`comment-${post.id}`}
//                         type="text"
//                         maxLength={500}
//                         placeholder="Escribe un comentario..."
//                         value={
//                           commentText[post.id] || ""
//                         }
//                         onChange={
//                           event =>
//                             setCommentText(
//                               previous => ({
//                                 ...previous,

//                                 [post.id]:
//                                   event.target.value
//                               })
//                             )
//                         }
//                         onKeyDown={
//                           event => {

//                             if (
//                               event.key ===
//                               "Enter"
//                             ) {

//                               agregarComentario(
//                                 post.id
//                               );

//                             }

//                           }
//                         }
//                       />


//                       <button
//                         onClick={() =>
//                           agregarComentario(
//                             post.id
//                           )
//                         }
//                       >
//                         Publicar
//                       </button>

//                     </div>

//                   </article>

//                 );

//               })}

//             </section>

//           )}

//         </main>

//       </div>
//     </>
//   );
// }




// create table if not exists public.posts (
//   id uuid primary key default gen_random_uuid(),

//   user_id uuid not null,

//   image_url text not null,

//   storage_path text not null,

//   created_at timestamptz not null default now()
// );




// create table if not exists public.reactions (
//   id uuid primary key default gen_random_uuid(),

//   post_id uuid not null
//     references public.posts(id)
//     on delete cascade,

//   user_id uuid not null,

//   type text not null
//     check (type in ('like', 'dislike')),

//   created_at timestamptz not null default now(),

//   unique (post_id, user_id)
// );




// create table if not exists public.comments (
//   id uuid primary key default gen_random_uuid(),

//   post_id uuid not null
//     references public.posts(id)
//     on delete cascade,

//   user_id uuid not null,

//   text text not null,

//   created_at timestamptz not null default now()
// );




// alter table public.posts enable row level security;

// alter table public.reactions enable row level security;

// alter table public.comments enable row level security;



// create policy "pixagram_posts_select"
// on public.posts
// for select
// to anon, authenticated
// using (true);


// create policy "pixagram_posts_insert"
// on public.posts
// for insert
// to authenticated
// with check (
//   auth.uid() = user_id
// );


// create policy "pixagram_posts_delete"
// on public.posts
// for delete
// to authenticated
// using (
//   auth.uid() = user_id
// );




// create policy "pixagram_reactions_select"
// on public.reactions
// for select
// to authenticated
// using (true);


// create policy "pixagram_reactions_insert"
// on public.reactions
// for insert
// to authenticated
// with check (
//   auth.uid() = user_id
// );


// create policy "pixagram_reactions_update"
// on public.reactions
// for update
// to authenticated
// using (
//   auth.uid() = user_id
// )
// with check (
//   auth.uid() = user_id
// );


// create policy "pixagram_reactions_delete"
// on public.reactions
// for delete
// to authenticated
// using (
//   auth.uid() = user_id
// );




// create policy "pixagram_comments_select"
// on public.comments
// for select
// to authenticated
// using (true);


// create policy "pixagram_comments_insert"
// on public.comments
// for insert
// to authenticated
// with check (
//   auth.uid() = user_id
// );




// // create policy "pixagram_storage_insert"
// // on storage.objects
// // for insert
// // to authenticated
// // with check (
// //   bucket_id = 'photos'
// //   and
// //   (storage.foldername(name))[1] = auth.uid()::text
// // );


// // create policy "pixagram_storage_select"
// // on storage.objects
// // for select
// // to anon, authenticated
// // using (
// //   bucket_id = 'photos'
// // );


// // create policy "pixagram_storage_delete"
// // on storage.objects
// // for delete
// // to authenticated
// // using (
// //   bucket_id = 'photos'
// //   and
// //   (storage.foldername(name))[1] = auth.uid()::text
// // );