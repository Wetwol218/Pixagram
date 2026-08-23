import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import Auth from './Auth.jsx'

export default function App() {
  const [session, setSession] = useState(undefined) // undefined = cargando, null = sin sesión

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
      <h1>Bienvenido a Pixagram 📸</h1>

      <p>Has iniciado sesión como:</p>

      <strong>{session.user.email}</strong>

      <button
        className="logout"
        onClick={() => supabase.auth.signOut()}
      >
        Cerrar sesión
      </button>
    </div>
  )
}
