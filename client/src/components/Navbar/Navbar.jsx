import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style  from './Navbar.module.css'

const Navbar = () => {
const navigate = useNavigate();
  function handleNavHome() {
    navigate('/home');
    window.location.reload();
  }
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <div className={style.links}>
          <Link  className={style.imgLogo} onClick={handleNavHome} >
            {/* <img src="https://i.ibb.co/0Xz3WfL/Logo-ML.png" alt="Logo" width="70px" /> */}
            <h1>Videogameslogo</h1>
          </Link>
          <Link  className={style.link} onClick={handleNavHome} >Home</Link>
          <Link to="/about" className={style.link}>About</Link>
          <Link to="/create" className={style.link}>Post a Videogame</Link>
          
        </div>

      </div>
      
    </nav>
  )
}

export default Navbar