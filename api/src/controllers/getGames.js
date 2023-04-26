const { Videogame, Genres } = require('../db');
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
                background_image: e.background_image,
                released: e.released,
                rating: e.rating,
                genres: e.genres.map((e) => e.name)
            })
    })
    return filtrado
}

const getGames = async () => {
    const apiGames = []
    for (let i = 0; i < 6; i++) {
        // console.log('hola entre al for')
        if (i === 0) apiGames.push((await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results)
        else apiGames.push((await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)).data.results)
    };
    const apiGamesJoined = apiGames.flat();
    const videogamesApi = filteredVideogames(apiGamesJoined)
    const uniqueVideogamesApi = videogamesApi.filter(
        (game, index, self ) =>
          index === self.findIndex((g) => g.id === game.id)
      );
      
    //database
    const dbGames = await Videogame.findAll(
        {
            include: [
                {
                    model: Genres,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                },
            ],
        }
    );
    //console.log(dbGames[0].Genres, 'dbgames befor the foreach')
    const gamesWithGenreStrings = dbGames.map((game) => {
        const arrayGenreString = game.Genres.map(e => e.name)
        // console.log( arrayGenreString, 'grenes srtingf', game.name)
       return {...game.toJSON(), genres: arrayGenreString}
    //    console.log( game.Genres, 'grenes')
    })
//console.log('entre a get games')
    return [...gamesWithGenreStrings, ...uniqueVideogamesApi]
};


module.exports = { getGames };