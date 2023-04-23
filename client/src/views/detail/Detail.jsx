import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import style from './Detail.module.css'
import { getGameDetail } from '../../redux/actions'

const Detail = () => {
  let { id } = useParams();
console.log(id);
  const dispatch = useDispatch();
  
useEffect(() => {
  dispatch(getGameDetail(id))
  window.scrollTo(0, 0); // al cargarse el componente lo envia a la parte superior de la pagina
},[dispatch, id]);



const game = useSelector((state) => state.game);

  return (
    <div className={style.container}>
      <div className={style.game}>
        <h1 className={style.title}>{game.name}</h1>
        <img className={style.img} src={game.background_image} alt={game.name} />
        <div className={style.info}>
          <p className={style.description}>{game.description}</p>
          <p className={style.rating}>Rating: {game.rating}</p>
          <p className={style.released}>Released: {game.released}</p>
          {!game.platfroms || game.platfroms.length === 0 ? (
            <p>Sin generos</p>
          ) : (
            <span className={style.platfroms}>
              {game.platfroms.map((p) => (
                <p className={style.platfromsIndivi} key={p}>{p}</p>
              ))}
            </span>
          )}
          {!Array.isArray(game.genres) || game.genres.length === 0 ? (
            <p>Sin generos</p>
          ) : (
            <span className={style.genres}>
              {game.genres.map((g) => (
                <p className={style.genresIndivi} key={g}>{g}</p>
              ))}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Detail