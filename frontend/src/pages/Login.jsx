import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Context } from '../main'
import toast from 'react-hot-toast'
import { url } from '../components/api'
import axios from 'axios'

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${url}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true)

    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false)

    }
  }


  if (isAuthenticated) return <Navigate to={"/"} />

  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
          <button type='submit'>Login</button>
          <h4>Or</h4>
          <Link to="/register">Sign Up</Link>
        </form>
      </section>
    </div>
  )
}

export default Login