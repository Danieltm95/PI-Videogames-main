import React from 'react'
import Card from '../Card/Card'
import style from './CardContainer.module.css'
import { useSelector } from 'react-redux'






const CardContainer = () => {
    

    let videogames = useSelector(state => state.videogames)
    let checksearchname = useSelector(state => state.nameSearchChecked)
    

    

    

    if (!videogames || videogames.length === 0 || checksearchname) {
        return <div className={style.loading}>Loading...</div>
    }
    //
    if (!checksearchname) {
        return (
            <div className={style.container}>
                <div className={style.cards}>
                    {videogames.map(videogame => (
                        <Card
                        id={videogame.id}
                        key={videogame.id}
                        name={videogame.name}
                        platfroms={videogame.platfroms}
                        background_image={videogame.background_image}
                        released={videogame.released}
                        rating={videogame.rating}
                        genres={videogame.genres}
                        />
                        ))}
                </div>

            </div>
         
        )
    }
}

export default CardContainer