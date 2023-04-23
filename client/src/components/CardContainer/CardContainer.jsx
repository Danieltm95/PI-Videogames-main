import React from 'react'
import Card from '../Card/Card'
import style from './CardContainer.module.css'
import  {useSelector}  from 'react-redux'

// const videogames = [{
//     id: 24919,
//     name: "Mario Bros.",
//     platfroms: [
//         "Nintendo 3DS",
//         "Wii U",
//         "Wii"
//     ],
//     image: "https://media.rawg.io/media/screenshots/f22/f22857f426275f7a09d865a2ad2376b9.jpg",
//     released: "2006-11-19",
//     rating: 3.83,
//     genres: []
// },
// {
//     id: 54439,
//     name: "Mario Tennis (2000)",
//     platfroms: [
//         "Wii U",
//         "Wii",
//         "Nintendo 64",
//         "Game Boy Color"
//     ],
//     image: "https://media.rawg.io/media/screenshots/8b0/8b0d7dc61e9516e5678d18f9095f5b4e.jpg",
//     released: "2000-07-21",
//     rating: 4.06,
//     genres: [
//         "Sports"
//     ]
// },
// {
//     id: 52434,
//     name: "Mario Bros. (1983)",
//     platfroms: [
//         "Nintendo Switch",
//         "Nintendo 3DS",
//         "Wii U",
//         "Wii",
//         "Game Boy Advance",
//         "NES",
//         "Commodore / Amiga",
//         "Atari 7800",
//         "Atari 5200",
//         "Atari 2600",
//         "Atari 8-bit",
//         "Atari XEGS"
//     ],
//     image: "https://media.rawg.io/media/games/8ef/8efa90f72b466c632d7f95dd02be5e50.jpg",
//     released: "1983-01-01",
//     rating: 3.66,
//     genres: []
// },
// {
//     id: 54433,
//     name: "Mario Golf (1999)",
//     platfroms: [
//         "Wii U",
//         "Wii",
//         "Nintendo 64",
//         "Game Boy Color"
//     ],
//     image: "https://media.rawg.io/media/screenshots/aba/aba305582ea5fdd51451788ee43077f0.jpg",
//     released: "1999-06-11",
//     rating: 3.78,
//     genres: [
//         "Sports"
//     ]
// },
// {
//     id: 24868,
//     name: "Mario Strikers Charged",
//     platfroms: [
//         "Wii U",
//         "Wii"
//     ],
//     image: "https://media.rawg.io/media/screenshots/bb9/bb9a34f9b3e192e89b5bf8dffd7f2367.jpg",
//     released: "2007-05-25",
//     rating: 4.24,
//     genres: [
//         "Sports"
//     ]
// }]


const CardContainer = () => {

    const videogames = useSelector(state => state.videogames)
    console.log(videogames[0])
    console.log(videogames[5])

    if (!videogames || videogames.length === 0) {
        return <div>Loading...</div>
    }

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

export default CardContainer