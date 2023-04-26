const validate = ({
    name,
    description,
    background_image,
    rating,
    platfroms,
    genres,
    released,
  }) => {
    const errors = {};
  
    if (!name) errors.name = "Debes ingresar un Nombre!";
    if (description.length > 300) errors.description = " Maximo 300 caracteres en la descripcion";
    if (!description) errors.description = "Debes ingresar una descripcion del juego.";
    if (!background_image) errors.background_image = "Debes ingresar una imagen de fondo.";
    if (rating < 1 || !rating) errors.rating = "Debes ingresar un rating. Entre 1 y 5";
    if (rating > 5) errors.rating = "5 es el maximo rating posible";
    if (!released) errors.released = "Debes ingresar una fecha de lanzamiento del juego.";
  
    console.log(errors, "errors de validate");
    return errors;
  };
  
  export default validate;