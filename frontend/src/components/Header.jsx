import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../main'
import axios from 'axios'
import { url } from './api'
import toast from 'react-hot-toast'

const Header = () => {
    const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context)

    const logoutHandler = async () => {
        setLoading(true);
        try {
            axios.get(`${url}/users/logout`, {
                withCredentials: true,
            })

            toast.success("Logged Out Successfully")
            setIsAuthenticated(false)
            setLoading(false)
        } catch (error) {
            toast.error(error.response.data.message)
            setIsAuthenticated(true)
            setLoading(false)
        }
    }

    return (
        <nav className="header">
            <div>
                <h2>TODO App</h2>
            </div>
            <article>
                <Link to={"/"}>Home</Link>
                <Link to={"/profile"}>Profile</Link>
                {isAuthenticated ? (
                    <button disabled={loading} onClick={logoutHandler} className='btn'>Logout</button>
                ) : (
                    <Link to={"/login"}>Login</Link>
                )}


            </article>
        </nav>
    )
}

export default Header