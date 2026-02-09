import React, { useState, useEffect } from 'react'

export default function Home({ user, onLogout }){
  const messages = [
    "You make my heart skip a beat! 💕",
    "Forever grateful for you! 🌹",
    "You're my greatest blessing! ✨",
    "My love for you is endless! 💖",
    "You light up my world! ⭐",
    "Every moment with you is precious! 💝",
    "You're my reason to smile! 😊",
    "My heart belongs to you! ❤️",
    "You're absolutely wonderful! 🌟",
    "I'm so lucky to have you! 🍀"
  ]

  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex(prev => (prev + 1) % messages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [messages.length])

  return (
    <div className="relative bg-gradient-to-br from-pink-100 to-red-50 rounded overflow-hidden shadow-lg p-8">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=60')] bg-cover"></div>
      <div className="relative z-10 text-center">
        <div className="text-6xl">🌹🌹🌹</div>
        <h2 className="text-2xl font-bold mt-4">Hello {user?.name},</h2>
        <p className="mt-2 text-lg">you're {user?.age} years old</p>
        <p className="mt-6 text-lg font-semibold text-red-600 h-12 flex items-center justify-center">
          {messages[msgIndex]}
        </p>
        <button onClick={onLogout} className="mt-6 bg-white/80 text-red-600 px-4 py-2 rounded shadow">Logout</button>
      </div>
    </div>
  )
}
