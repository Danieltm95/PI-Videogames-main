const { Videogame, Genres } = require('../db');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;

const getGameDetailById = async (id) => {
  
    if (!isNaN(id)) {
        const gameId = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;
        return filteredVideogames(gameId);
    }else {
        console.log("entro a BD")
        // const gameDbById = await Videogame.findByPk(id, {include: Genres.name});
        const gameDbById = await Videogame.findByPk(id, {
            include: [
              {
                model: Genres,
                attributes: ["name"],
                through: {
                  attributes: [],
                },
              },
            ],
          });
        
          const gameByIdGenresNames = gameDbById.Genres.map((genre) => genre.name);
        return  {...gameDbById.toJSON(), genres: gameByIdGenresNames}
    }
   
};

const filteredVideogames = (gameId) => {
        return (
            {
                id: gameId.id,
                name: gameId.name,
                description: gameId.description,
                 platfroms: gameId.platforms.map((e) => e.platform.name),
                 background_image: gameId.background_image,
                released: gameId.released,
                rating: gameId.rating,
                 genres: gameId.genres.map((e) => e.name)
            })
   
}




module.exports =  {getGameDetailById} ;