import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './Landing.module.css'

const Landing = () => {
    return (
        <div className={style.landing}>
            <img className={style.fondo} alt='fondo' />
            <div>
                <NavLink className={style.link} to={'/home'}>
                    <button className={style.button}>Ingresar</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Landing;