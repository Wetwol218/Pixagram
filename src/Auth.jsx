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
  );
}
