import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import style from './CardContainer.module.css'
import { useSelector } from 'react-redux'






const CardContainer = () => {


    let videogames = useSelector(state => state.videogames)
    let checksearchname = useSelector(state => state.nameSearchChecked)
    const [paginaActual, setPaginaActual] = useState(1);

    useEffect(() => {
        const numPaginas = Math.ceil(videogames.length / 15);
        if (paginaActual > numPaginas) {
            setPaginaActual(1);
        }
    }, [videogames, paginaActual]);

    if (!videogames || videogames.length === 0 || checksearchname) {
        return (
            <div className={style.loader}></div>
        )
    }



    // [1,2,3,4,5,6,7,8]

    function getArrayPorcion(games, pagina) {
        const porcionSize = 15;
        const start = (pagina - 1) * porcionSize;
        const end = start + porcionSize;

        const porcion = [];
        for (let i = start; i < end && i < games.length; i++) {
            porcion.push(games[i]);
        }
        return porcion;
    }


    let JuegosActuales = getArrayPorcion(videogames, paginaActual);


    const handlePagina = (pagina) => {
        setPaginaActual(pagina);

    }

    const numeroPaginas = [];
    let numPaginas = Math.ceil(videogames.length / 15);
    for (let i = 1; i <= numPaginas; i++) {
        numeroPaginas.push(i);
    }






    if (!checksearchname) {
        return (
            <div className={style.container}>
                <div className={style.paginadoContainer}>
                    {numeroPaginas.map((num) => (
                        <button
                            className={style.paginado}
                            key={num}
                            onClick={() => handlePagina(num)}
                        >
                            {num}
                        </button>
                    ))}
                </div>
                <div className={style.cards}>
                    {JuegosActuales.map(videogame => (
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
                <div className={style.paginadoContainer}>
                    {numeroPaginas.map((num) => (
                        <button
                            className={style.paginado}
                            key={num}
                            onClick={() => handlePagina(num)}
                        >
                            {num}
                        </button>
                    ))}
                </div>

            </div>

        )
    }
}

export default CardContainer