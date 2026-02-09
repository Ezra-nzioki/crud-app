import React, { useState } from 'react'
import axios from 'axios'

export default function Signup({ onSignedUp }){
  const [form, setForm] = useState({ name: '', email: '', age: '', password: '' })
  const [msg, setMsg] = useState('')

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('https://cautious-space-waddle-jxpprrj97xqf4j9-3000.app.github.dev/api/signup', { ...form })
      setMsg('Signed up: ' + res.data.user.email)
      // navigate to login
      setTimeout(() => onSignedUp && onSignedUp(), 800)
    } catch (err) {
      setMsg(err.response?.data?.message || err.message)
    }
  }

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-medium mb-4 text-red-600">Create your account</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handle} className="w-full mb-2 p-2 border rounded" />
      <input name="email" placeholder="Email" value={form.email} onChange={handle} className="w-full mb-2 p-2 border rounded" />
      <input name="age" placeholder="Age" value={form.age} onChange={handle} className="w-full mb-2 p-2 border rounded" />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handle} className="w-full mb-4 p-2 border rounded" />
      <button className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded">Sign Up</button>
      {msg && <p className="mt-3 text-sm text-center">{msg}</p>}
    </form>
  )
}
