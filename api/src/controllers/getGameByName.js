const { Videogame, Genres } = require('../db');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Op } = require('sequelize');


const getGameByName = async (name) => {
    //const nameUpperCase = name.toUpperCase();
    //console.log(nameUpperCase, "nameUpperCase")

    //console.log(("'" + nameUpperCase+"'"))

    // BUSCO PRIMERO EN LA BASE DE DATOS
    const gameByNameDb = await Videogame.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        include: [
            {
                model: Genres,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
        ],
    });

    const gamesWithGenreStrings = gameByNameDb.map((game) => {
        const arrayGenreString = game.Genres.map(e => e.name)
        // console.log( arrayGenreString, 'grenes srtingf', game.name)
       return {...game.toJSON(), genres: arrayGenreString}
    //    console.log( game.Genres, 'grenes')
    })

    // ahora buscamos la api por nombre 

    const gameByNameApi = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
    const gameList = gameByNameApi.data.results;
    // console.log(gameList, "quietoooooo");
    const top15name = [];
    if (gameByNameDb.length === 0) {
        for (var i = 0; i < 15; i++) {
            top15name.push(filteredVideogames(gameList[i]));
        }
    } else {
        for (var i = 0; i < 14; i++) {
            top15name.push(filteredVideogames(gameList[i]));
        }
    }


    if (!gameByNameDb.length === 0 && top15name.length === 0) {
        throw new Error('No se encontro el juego');
    } else {
        const gamesByNameApiDb = [...gamesWithGenreStrings, ...top15name]
        console.log(gamesByNameApiDb.length, "gamesByNameApiDb length")
        return gamesByNameApiDb;
    };

};

const filteredVideogames = (gameByNameApi) => {
    return (
        {
            id: gameByNameApi.id,
            name: gameByNameApi.name,
            description: gameByNameApi.description,
            platfroms: gameByNameApi.platforms.map((e) => e.platform.name),
            background_image: gameByNameApi.background_image,
            released: gameByNameApi.released,
            rating: gameByNameApi.rating,
            genres: gameByNameApi.genres.map((e) => e.name)
        })

}
module.exports = { getGameByName };