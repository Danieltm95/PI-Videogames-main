const { getAllGenres } = require('../controllers/getAllGenres.js');


const getGenres = async (req, res) => {

    try {
        const genres = await getAllGenres();
        console.log(genres)
        res.status(200).json(genres);
    } catch (error) {
       res.status(500).json({error: error.message});
    }
};

module.exports = { getGenres };