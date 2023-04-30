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
  }, [dispatch, id]);



  const game = useSelector((state) => state.game);

  return (
    <div className={style.container}>
      <div className={style.game}>

        <div className={style.imagenContainer}>
          <img className={style.img} src={game.background_image} alt={game.name} />
        </div>



        <div className={style.infoContainer}>
          <div className={style.info}>
            <div className={style.titleContainer}>
              <h1 className={style.title}>{game.name}</h1>
              <p className={style.rating}>{game.rating}</p>
            </div>
            <hr class={style.line} />
            <h3>Description:</h3>
            <div className={style.description} dangerouslySetInnerHTML={{ __html: game.description }}></div>
            <hr class={style.line} />
            <p className={style.released}>Release Date: {game.released}</p>
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
    </div>
  )
}

export default Detail