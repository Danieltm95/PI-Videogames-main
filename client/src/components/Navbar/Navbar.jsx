import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style  from './Navbar.module.css'
import logo from '../../helper/logo.png'

const Navbar = () => {
const navigate = useNavigate();
  function handleNavHome() {
    navigate('/home');
    window.location.reload();
  }
  function handleAbout() {
    navigate('/about');
    window.location.reload();
  }
  function handleCreate() {
    navigate('/create');
    window.location.reload();
  }
  return (
    <header className={style.header}>
      <div>
        <Link   onClick={handleNavHome} ><img src={logo} className={style.imgLogo}alt="Logo" />
        </Link>
      </div>
      <div className={style.headerHandle}>
      <button className={style.button} onClick={handleNavHome}>Home</button>
      <span className={style.span}></span>
      <button className={style.button} onClick={handleAbout}>About Me!</button>
      <span className={style.span}></span>
      <button className={style.button} onClick={handleCreate}>Post a Videogame!</button>
      <div className={style.nav}></div>
      </div>

    </header>
  )
}

export default Navbar



