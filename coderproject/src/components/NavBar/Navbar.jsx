import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='div'>
          <div className='logo'>
            <Link to={'/'}><img src='./assets/img/techx.jpg'></img></Link>
          </div>
          
          <ul>
          <li>  

            <NavLink to={'/'}>Inicio</NavLink>

          </li>

          <li>  

            <NavLink to={'categoria/Iluminacion'}>Iluminacion</NavLink>

          </li>

          <li>  

            <NavLink to={'categoria/Audio'}>Audio</NavLink>

          </li>

          <li>  

            <NavLink to={'categoria/Seguridad'}>Seguridad</NavLink>

          </li>
          <li>  

            <NavLink to={'categoria/Temperatura'}>Temperatura</NavLink>

          </li>

        </ul>

       

    </div>
  )
}

export default Navbar