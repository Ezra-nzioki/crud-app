import React, { useState } from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'

export default function App(){
  const [page, setPage] = useState('signup') // 'signup' | 'login' | 'home'
  const [user, setUser] = useState(null)

  const handleSignedUp = () => setPage('login')
  const handleLogin = (userData) => { setUser(userData); setPage('home') }

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center py-10">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Valentine Auth</h1>

        {page === 'signup' && <Signup onSignedUp={handleSignedUp} />}
        {page === 'login' && <Login onLogin={handleLogin} />}
        {page === 'home' && <Home user={user} onLogout={() => { setUser(null); setPage('login') }} />}

        <div className="text-center mt-4">
          {page !== 'signup' && <button onClick={() => setPage('signup')} className="text-sm text-red-600">Go to Signup</button>}
          {page !== 'login' && <button onClick={() => setPage('login')} className="ml-2 text-sm text-red-600">Go to Login</button>}
        </div>
      </div>
    </div>
  )
}
