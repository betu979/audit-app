import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    const token = localStorage.getItem('token')
    if(token){
      localStorage.removeItem('token')
      navigate('/login')
    }
  }

  return (
    <div className='navbar'>
       <div className='logo'>People Combined LLP </div>
       {localStorage.getItem('token') && <button className='bg-red rounded-6 text-uppercase' onClick={handleClick}>Logout</button>}
    </div>
  )
}

export default Navbar
