const { Videogame } = require('../db');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;


const getGame = async () => {
    const apiGames = []
    console.log('holi1')

    for (let i = 0; i < 5; i++) {
        if (i === 0) apiGames.push((await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results)
        else apiGames.push((await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)).data.results)
    };
    const apiGamesJoined = apiGames.flat();
    const videogamesApi = filteredVideogames(apiGamesJoined)
    //database
    const dbGames = await Videogame.findAll();
    const filteredVideogames = (arreglo) => {
        console.log('holi2')
        const filtrado = arreglo.map((e) => {
            return (
                {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    platfroms: e.platforms,
                    image: e.background_image,
                    released: e.released,
                    rating: e.rating,
                })
        })
        return filtrado
    }
    return [...dbGames, ...videogamesApi];
};


module.exports = { getGame };