import React, { useState } from 'react'
import axios from 'axios'

export default function Login({ onLogin }){
  const [form, setForm] = useState({ email: '', password: '' })
  const [msg, setMsg] = useState('')

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/login', { ...form })
      setMsg('Logged in: ' + res.data.user.email)
      localStorage.setItem('token', res.data.token)
      // notify parent
      if (typeof onLogin === 'function') onLogin(res.data.user)
    } catch (err) {
      setMsg(err.response?.data?.message || err.message)
    }
  }

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-medium mb-4 text-red-600">Welcome back</h2>
      <input name="email" placeholder="Email" value={form.email} onChange={handle} className="w-full mb-2 p-2 border rounded" />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handle} className="w-full mb-4 p-2 border rounded" />
      <button className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded">Log In</button>
      {msg && <p className="mt-3 text-sm text-center">{msg}</p>}
    </form>
  )
}

