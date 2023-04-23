const { Router } = require('express');

const { getVideogames, getVideogameById, getVideogameByName, postVideogame } = require('../handlers/videogameHandlers.js');

const { validate } = require('../middlewares/validate.js');

const videogamesRouter = Router()





videogamesRouter.get("/", getVideogames);
videogamesRouter.get("/name", getVideogameByName);
videogamesRouter.get("/:idVideogame", getVideogameById);
videogamesRouter.post("/", validate, postVideogame);

module.exports = videogamesRouter;
