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
                    <h2 className={style.name}>{name}</h2>
                    <span className={style.rating}>{rating}</span>
                </div>
                {!Array.isArray(genres) || genres.length === 0 ? (
                    <p>Sin generos!!</p>
                ) : (
                    <span className={style.genres}>
                        {genres.map((g) => (
                            <ul className={style.ul} key={g}>
                                <li className={style.lista}>{g}</li>
                            </ul>
                        ))}
                    </span>
                )}


            </div>
        </Link >
    );
};

export default Card