const { Router } = require('express');

const { getVideogames, getVideogameById, getVideogameByName, postVideogame } = require('../handlers/videogameHandlers.js');

const videogamesRouter = Router()
console.log("estoy aqui")
videogamesRouter.get("/", getVideogames);
videogamesRouter.get("/name", getVideogameByName);
videogamesRouter.get("/:idVideogame", getVideogameById);
videogamesRouter.post("/", postVideogame);

module.exports = videogamesRouter;
