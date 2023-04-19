const { Videogame } = require('../db');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;

const filteredVideogames = (arreglo) => {
    
    const filtrado = arreglo.map((e) => {
        return (
            {
                id: e.id,
                name: e.name,
                description: e.description,
                platfroms: e.platforms.map((e) => e.platform.name),
                image: e.background_image,
                released: e.released,
                rating: e.rating,
                genres: e.genres.map((e) => e.name)
            })
    })
    return filtrado
}

const getGames = async () => {
    const apiGames = []
    
    
    for (let i = 0; i < 5; i++) {
        // console.log('holi entre al for')
        if (i === 0) apiGames.push((await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results)
        else apiGames.push((await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)).data.results)
    };
    const apiGamesJoined = apiGames.flat();
    const videogamesApi = filteredVideogames(apiGamesJoined)
    //database
    const dbGames = await Videogame.findAll();
    const gamesDbApi = [...dbGames, ...videogamesApi];
    // console.log(gamesDbApi)
    return gamesDbApi
};


module.exports =  {getGames} ;