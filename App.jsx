function App() {
  const [usuario, setUsuario] = React.useState(null);

  const iniciarSesion = (datos) => {
    setUsuario(datos);
  };

  if (!usuario) {
    return <Auth onLogin={iniciarSesion} />;
  }

  return (
    <div className="app">
      <h1>Bienvenido a Pixagram 📸</h1>

      <p>Has iniciado sesión como:</p>

      <strong>{usuario.correo}</strong>

      <button
        className="logout"
        onClick={() => setUsuario(null)}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);