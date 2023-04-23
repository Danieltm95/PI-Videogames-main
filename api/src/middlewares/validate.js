const validate = (req, res, next) => {
    const {name, description, background_image} = req.body;
    console.log(req.body)

    if(!name || !description || !background_image){
        console.log('Missing data in request body');
        return res.status(400).json({error: "Missing data"});
    }

    if(name.length === 0 || description.length === 0 || background_image.length === 0){
        console.log('Empty string in request body');
        return res.status(400).json({error: "Missing data"});
    }

    next();
};

module.exports = {validate};





// const validate = (req, res, next) => {
//     const {name, description, background_image} = req.body;
//  console.log(req.body)
//     if(name.length === 0 || description.length === 0 || background_image.length === 0){
//         //res.status(400).json({error: "Missing data"})
//         console.log('holi entro IF  al middleware')
//         throw new Error("Missing data");
//     }
//     next();
// };
// module.exports = {validate};