const { getGames } = require('../controllers/getGames.js')

const getVideogames =  async (req, res) => {
    console.log('hola');
    try {
        const games = getGames()
        res.status(200).json(games);
    } catch (error) {
       res.status(500).json({error: error.message});
    }
};




const getVideogameByName =  (req, res) => {
    const name = req.query.name;
    res.status(200).json(`get videogames by name: ${name}`)
};
const getVideogameById =  (req, res) => {
    console.log("ID")
    res.status(200).json('get videogames por el ID')
};

const postVideogame =  (req, res) => {
    console.log('daniel NO ENTROque gonorea esto');
    res.status(200).json('post videogames ')
};



module.exports = { getVideogames, getVideogameById, getVideogameByName, postVideogame };