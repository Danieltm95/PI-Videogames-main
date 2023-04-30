import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Genre.module.css';
import { filterByGenre } from '../../redux/actions';


const Genre = () => {

    //console.log("gernes estoy en el home")
    const genres = useSelector(state => state.genres)
    //console.log(genres, "generos mapgernes home")
    const dispatch = useDispatch()
    const handleFilter = (genre) => {
        dispatch(filterByGenre(genre))
    }
    return (
        <div className={style.container}>
            {genres.length > 0 &&
                genres.map((genre, index) => (
                    <div>
                        <button
                            key={index}
                            onClick={() => handleFilter(genre)}
                            className={style.button}
                        >
                            {genre}
                        </button>
                        <span className={style.span}></span>
                    </div>
                ))
            }
        </div>
    )
    
}

export default Genre