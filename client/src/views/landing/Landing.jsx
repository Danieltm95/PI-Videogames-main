import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Landing.module.css';
import backgroundImage from '../../helper/super-mario-3d-7eypp3ya39wg696z.jpg';

const Landing = () => {
  return (
    <div className={style.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className={style.welcome}>Welcome</h1>
      <div className={style.landing}>
        <h2 className={style.title}>To GamesForU</h2>
        <div>
          <NavLink className={style.link} to={'/home'}>
            <button className={style.button}>Ingresar</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Landing;