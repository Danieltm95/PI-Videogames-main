import React from 'react'
import style from './About.module.css'
import fotoPerfil from '../../helper/fotoPerfil.jpeg'
import whatsapp from '../../helper/whatsapp.png'
import linkedin from '../../helper/linkedin.png'
import github from '../../helper/github.png'

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.about}>

        <div className={style.imagenContainer}>
          <img className={style.img} src={fotoPerfil} alt="img" />
        </div>



        <div className={style.infoContainer}>
          <div className={style.info}>
            <div className={style.titleContainer}>
              <h1 className={style.title}>Daniel Ocampo Carvajal</h1>
              <p className={style.rating}>5</p>
            </div>
            <hr class={style.line} />
            <h3>About me:</h3>
            <div className={style.description}>
              <p>Hola, soy un ingeniero civil graduado de la Universidad del Quindío en Colombia y actualmente estoy cursando un bootcamp para ser  desarrollador fullstack en Javascript, React y Node.js. Me apasiona el mundo de la tecnología y la programación, y siempre estoy buscando aprender y mejorar mis habilidades. Me enorgullece ser de Colombia y vivo aquí, donde puedo aportar mis habilidades y conocimientos al crecimiento de la comunidad tecnológica.</p>
            </div>
            <hr class={style.line} />
            <span className={style.platfroms}>
              <p className={style.platfromsIndivi}>JavaScript</p>
              <p className={style.platfromsIndivi}>React</p>
              <p className={style.platfromsIndivi}>Node.js</p>
            </span>
            <hr class={style.line} />
            <p className={style.released}>Email: docampoc95@gmail.com </p>
            <p className={style.released}>Phone: +57 3206629777</p>
            <div  className={style.linksContainer}>
              <a href="https://wa.me/57326629777">
                <img className={style.whatsapp} src={whatsapp} alt="WHATSAPP" />
              </a>
              <a href="https://www.linkedin.com/in/daniel-ocampo-b13017225/">
                <img className={style.whatsapp} src={linkedin} alt="linked" />
              </a>
              <a href="https://github.com/Danieltm95">
                <img className={style.whatsapp} src={github} alt="github" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About