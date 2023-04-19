const { Videogame, Genres} = require('../db');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;


const getAllGenres = async () => {
    const genres = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data;
    console.log(genres, "generos");
        genres.results.forEach(element => {
            Genres.create({
                name: element.name
            })
        });
    }

module.exports =  {getAllGenres};
