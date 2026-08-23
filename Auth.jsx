function Auth({ onLogin }) {
  const [modo, setModo] = React.useState("login");

  const [form, setForm] = React.useState({
    nombre: "",
    correo: "",
    contraseña: "",
  });

  const cambiarInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    if (modo === "login") {
      alert(`Bienvenido ${form.correo}`);
    } else {
      alert(`Cuenta creada para ${form.nombre}`);
    }

    onLogin(form);
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
        />

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

window.Auth = Auth;