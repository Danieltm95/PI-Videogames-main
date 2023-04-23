const { Videogame, Genres } = require('../db');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;


const getAllGenres = async () => {
    const genres = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data;
    // console.log(genres, "generos");
    genres.results.forEach(element => {
        Genres.findOrCreate({
            where: {name: element.name}
        })
    });

    const genresDb = await Genres.findAll( {attributes: ['name'], raw: true} );
    const genresWithGenreStrings = genresDb.map((game) => {
        return game.name;
    })
    return genresWithGenreStrings
}

module.exports = { getAllGenres };
