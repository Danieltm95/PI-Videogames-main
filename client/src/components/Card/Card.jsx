import React from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.css'

const Card = ({ background_image, name, rating, genres, id, }) => {
    //console.log(genres,'generdre')
    return (
        <Link className={style.link} to={`/videogames/${id}`} >
            <div className={style.card}>
                <img className={style.img} src={background_image} alt={name} />
                <div className={style.info}>
                    <h3 className={style.name}>{name}</h3>
                    <span className={style.rating}>★  {rating}</span>
                </div>
                <div className={style.genresContainer}>
                    {!Array.isArray(genres) || genres.length === 0 ? (
                        <p className={style.listaSinGenero}>Sin generos!!</p>
                    ) : (
                        <div className={style.genres}>
                            {genres.length === 1 ? (
                                <div className={style.genres}>
                                    <p className={style.listaSinGenero}>{genres[0]}</p>
                                </div>
                            ) : (
                                <div className={style.genres}>
                                    {genres.slice(0, 3).map((g, i) => (
                                        <div>
                                            <p className={style.lista}>{g}</p>
                                            {i !== genres.length - 1 && i !== 2 && <span className={style.span}></span>}
                                        </div>
                                    ))}
                                    {genres.length > 4 && <p className={style.lista}>+</p>}
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>
        </Link >
    );
};

export default Card


// {genres.map((g, index) => (
//     <div>
//         <p className={style.lista}>{g}</p>
//         {index < genres.length - 1 && <span className={style.span}></span>}
//     </div>❤
// ))} 