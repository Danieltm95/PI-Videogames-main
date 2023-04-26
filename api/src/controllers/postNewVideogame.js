const { Videogame, Genres} = require('../db');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;

const postNewVideogame = async (name, description, released, rating, background_image, genres, platfroms) => {
    console.log("entró al controlador de post");

    //const nameToUpperCase = name.toUpperCase();
    //buscamos is exsite y si no creamos la instancia de videojuego nuevo
    const [game, created] = await Videogame.findOrCreate({
        where: { name : name},
        defaults: {
        description,
        released,
        rating,
        background_image,
        platfroms,
      },
    });
    console.log(game, "game");

   
    
    // checkeamos si los generos existe 
    if (genres && genres.length) {
        const genreInstancia = await Promise.all(
            genres.map((genre) =>   //mapeamos la array que entro por body a ver si existe en nustra base de datos  
              Genres.findAll({ 
                where: { name: genre },
              })
            )
          );
          await game.addGenres(genreInstancia.map((e) => e[0])); // a la instancia de "game" unimos la associacion "muchos a muchos " entre el modelo Genres y Videogame de cada uno de los genres.
        }
        

        if (!created) return "Este usuario ya existe";
        
        
      };
      

      
      module.exports =  {postNewVideogame} ;



      // const [game, created] = await Videogame.findOrCreate({
      //     where: { name },
      //      defaults: {
      //        description,
      //        released,
      //        rating,
      //        background_image,
      //        platfroms,
      //        genres,
      //      },
      //    });
  
      //    if(genres){
      //     const genresToAdd = await Genres.findOrCreate({
      //       where: {name: genres},
      //     })
      //     }