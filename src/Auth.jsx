import { useState } from 'react'
import { supabase } from './lib/supabase'

export default function Auth() {
  const [modo, setModo] = useState("login");

  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
  });

  const [error, setError] = useState("");

  const cambiarInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();
    setError("");

    const { error } =
      modo === "login"
        ? await supabase.auth.signInWithPassword({
            email: form.correo,
            password: form.contraseña,
          })
        : await supabase.auth.signUp({
            email: form.correo,
            password: form.contraseña,
            options: { data: { nombre: form.nombre } },
          });

    if (error) {
      setError(error.message);
      return;
    }

    if (modo === "register") {
      alert(`Cuenta creada para ${form.nombre}. Revisa tu correo si se requiere confirmación.`);
    }
  };

  return (
    <div className="auth-page">
    <style>{`
      * {
        box-sizing: border-box;
      }

      .auth-page {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fafafa;
        padding: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      }

      .auth-container {
        width: 100%;
        max-width: 380px;
        background: #ffffff;
        border: 1px solid #dbdbdb;
        border-radius: 12px;
        padding: 36px 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
      }

      .logo-icon {
        position: relative;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .logo-circulo {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        background: linear-gradient(45deg, #405de6, #5b51d8, #833ab4, #c13584, #e1306c, #fd1d1d);
      }

      .logo-punto {
        position: absolute;
        top: 10px;
        right: 8px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ffffff;
      }

      .logo h1 {
        margin: 0;
        font-size: 28px;
        font-weight: 600;
        font-family: 'Brush Script MT', cursive;
        background: linear-gradient(45deg, #405de6, #5b51d8, #833ab4, #c13584, #e1306c, #fd1d1d);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .auth-container h2 {
        margin: 0 0 4px;
        font-size: 18px;
        font-weight: 600;
        color: #262626;
        text-align: center;
      }

      .subtitulo {
        margin: 0 0 24px;
        font-size: 14px;
        color: #8e8e8e;
        text-align: center;
      }

      .form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .input {
        width: 100%;
        padding: 12px 14px;
        font-size: 14px;
        color: #262626;
        background: #fafafa;
        border: 1px solid #dbdbdb;
        border-radius: 8px;
        outline: none;
        transition: border-color 0.15s ease, background 0.15s ease;
      }

      .input::placeholder {
        color: #8e8e8e;
      }

      .input:focus {
        border-color: #a8a8a8;
        background: #ffffff;
      }

      .error {
        margin: 2px 0 0;
        font-size: 13px;
        color: #ed4956;
        text-align: center;
      }

      .boton {
        margin-top: 6px;
        border: none;
        background: #0095f6;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        padding: 10px 16px;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.15s ease;
      }

      .boton:hover {
        background: #1877f2;
      }

      .boton:active {
        transform: scale(0.98);
      }

      .separador {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        margin: 20px 0;
      }

      .separador span {
        flex: 1;
        height: 1px;
        background: #dbdbdb;
      }

      .separador p {
        margin: 0;
        font-size: 13px;
        font-weight: 600;
        color: #8e8e8e;
      }

      .cambiar {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        font-size: 14px;
      }

      .cambiar span {
        color: #262626;
      }

      .link {
        border: none;
        background: transparent;
        color: #0095f6;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        padding: 0;
      }

      .link:hover {
        opacity: 0.7;
      }

      @media (max-width: 500px) {
        .auth-container {
          border: none;
          border-radius: 0;
          box-shadow: none;
          padding: 32px 24px;
        }

        .auth-page {
          padding: 0;
        }
      }
    `}</style>
    <div className="auth-container">

      <div className="logo">

        <div className="logo-icon">
          <div className="logo-circulo"></div>
          <div className="logo-punto"></div>
        </div>

        <h1>Pixagram</h1>

      </div>

      <h2>
        {modo === "login"
          ? "Inicia sesión"
          : "Crea tu cuenta"}
      </h2>

      <p className="subtitulo">
        {modo === "login"
          ? "Comparte tus momentos con el mundo"
          : "Únete a nuestra comunidad"}
      </p>

      <form
        onSubmit={enviarFormulario}
        className="form"
      >

        {modo === "register" && (
          <input
            name="nombre"
            type="text"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={cambiarInput}
            className="input"
            required
          />
        )}

        <input
          name="correo"
          type="email"
          placeholder="Correo electrónico"
          value={form.correo}
          onChange={cambiarInput}
          className="input"
          required
        />

        <input
          name="contraseña"
          type="password"
          placeholder="Contraseña"
          value={form.contraseña}
          onChange={cambiarInput}
          className="input"
          required
          minLength={6}
        />

        {error && <p className="error">{error}</p>}

        <button
          type="submit"
          className="boton"
        >
          {modo === "login"
            ? "Iniciar sesión"
            : "Crear cuenta"}
        </button>

      </form>

      <div className="separador">
        <span></span>
        <p>O</p>
        <span></span>
      </div>


      <div className="cambiar">

        {modo === "login" ? (
          <>
            <span>
              ¿No tienes una cuenta?
            </span>

            <button
              className="link"
              onClick={() => setModo("register")}
            >
              Regístrate
            </button>
          </>
        ) : (
          <>
            <span>
              ¿Ya tienes una cuenta?
            </span>

            <button
              className="link"
              onClick={() => setModo("login")}
            >
              Inicia sesión
            </button>
          </>
        )}

      </div>

    </div>
    </div>
  );
}
