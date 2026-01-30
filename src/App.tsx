import { useState } from 'react'
import LoginPage from './pages/login'
import DashboardPage from './pages/dashboard'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = (email: string, password: string) => {
    // Aquí se puede agregar autenticación con AWS Amplify o cualquier validación
    console.log('Login attempt:', { email, password })
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <>
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <DashboardPage onLogout={handleLogout} />
      )}
    </>
  )
}
