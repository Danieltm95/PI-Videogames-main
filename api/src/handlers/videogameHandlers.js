const { getGameDetailById } = require('../controllers/getGameDetailById.js');
const { getGames } = require('../controllers/getGames.js');
const { postNewVideogame } = require('../controllers/postNewVideogame.js');
const { getGameByName } = require('../controllers/getGameByName.js');

const getVideogames = async (req, res) => {
    try {
        const games = await getGames()
        
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const getVideogameByName = async (req, res) => {
    const  {name}  = req.query;
    //console.log(typeof(name));
    try {
        console.log("entro al handler try");
        const gamesByName = await getGameByName(name)

        res.status(200).json(gamesByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getVideogameById = async (req, res) => {
    //console.log("ID")
    const id = req.params.idVideogame
    console.log(id);
    try {
        const gameId = await getGameDetailById(id)
        console.log(gameId)
        res.status(200).json(gameId);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const postVideogame = async (req, res) => {
    const { name, description, released, rating, background_image, genres, platfroms } = req.body;
     //console.log(req.body)
    // console.log(genres)
    try {
        console.log('entropost rput');
        if (!name || !description || !released || !background_image || !genres || !platfroms) {
            res.status(400).json({ message: 'Falta informacion' })
        } else {
            const postGame = await postNewVideogame(name, description, released, rating, background_image, genres, platfroms)
            console.log(postGame)
            res.status(200).json(postGame);
        }
    } catch (error) {
        console.log('quedo malo el post');
        
        res.status(500).json({ error: error.message });
    }
};



module.exports = { getVideogames, getVideogameById, getVideogameByName, postVideogame };