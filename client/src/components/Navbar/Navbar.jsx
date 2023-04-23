import React from 'react'
import { Link } from 'react-router-dom'
import style  from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <div className={style.links}>
          <Link to="/home" className={style.imgLogo}>
            {/* <img src="https://i.ibb.co/0Xz3WfL/Logo-ML.png" alt="Logo" width="70px" /> */}
            <h1>Videogameslogo</h1>
          </Link>
          <Link to="/home" className={style.link}>Home</Link>
          <Link to="/about" className={style.link}>About</Link>
          <Link to="/create" className={style.link}>Post a Videogame</Link>
          
        </div>

      </div>
      
    </nav>
  )
}

export default Navbar