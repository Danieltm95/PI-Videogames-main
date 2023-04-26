import React, { useEffect, useState } from 'react'
import style from './CreateGame.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getGenres } from '../../redux/actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import validate from './formValidations'

const CreateGame = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    background_image: "",
    rating: "",
    platfroms: [],
    genres: [],
    released: "",
  })
  //console.log(form)

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    background_image: "",
    rating: "",
    platfroms: [],
    genres: [],
    released: "",
  })


  const genres = useSelector(state => state.genres)

  const handleCheckboxChange = (event) => {
    const genre = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setForm((prevState) => ({
        ...prevState,
        genres: [...prevState.genres, genre],
      }));
    } else {
      setForm((prevState) => ({
        ...prevState,
        genres: prevState.genres.filter((g) => g !== genre),
      }));
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch])

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    setErrors(validate({
      ...form,
      [e.target.name]: e.target.value
    })
    );

  };
  //console.log(errors,"errores")




  const [newPlatform, setNewPlatform] = useState("");

  const handlePlatformChange = (event) => {
    setNewPlatform(event.target.value);
  };

  const handleAddPlatform = () => {
    setForm((prevState) => ({
      ...prevState,
      platfroms: [...prevState.platfroms, newPlatform],
    }));
    setNewPlatform(""); // vuelve y setea newplatform vacia
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(errors.genres, 'gernes en erros submit')
    //console.log(form.genres, 'gernes en forms submit')
    if (form.genres.length === 0 ) {
      //console.log(errors.genres, 'gernes en erros submit IF')
      
      setErrors({
        ...errors,
        genres: "Seleciona por lo menos un genero"
      })
    } 
    
    if (form.platfroms.length === 0 ) {

      setErrors({
        ...errors,
        platfroms: "Ingresa por lo menos una plataforma",
      })
    } 
    if( form.platfroms.length !== 0 && form.genres.length !== 0  ){
      axios.post('/videogames', form)
      alert("Juego creado con exito")
      navigate('/home')
    }


  }
  // console.log(form.genres)



  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.outertitulo}>
          <h1 className={style.titulo}>PUBLICA TU JUEGO</h1>
        </div>
        <div className={style.inputcontainer}>
          <label className={style.labels}>
            Nombre:
          </label>
          <input
            className={style.input}
            placeholder="Nombre"
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />
          <span className={style.error}>{errors.name ? errors.name : " "}</span>


          <label className={style.labels}>
            Descripcion:
          </label>
          <input
            className={style.input}
            placeholder="Descripcion"
            type="text"
            name="description"
            onChange={handleInputChange}
            value={form.description}
          />
          <span className={style.error}>{errors.description ? errors.description : " "}</span>


          <label className={style.labels}>
            Plataformas:
          </label>
          <input
            className={style.input}
            placeholder="Plataformas"
            type="text"
            name="platfroms"
            onChange={handlePlatformChange}
            value={newPlatform}
          />
          <button className={style.button} type="button" onClick={handleAddPlatform}>
            Agrega Plataforma
          </button>
          <span className={style.error}>{errors.platfroms ? errors.platfroms : " "}</span>


          <label className={style.labels}>
            Imagen:
          </label>
          <input
            className={style.input}
            placeholder="URL imagen"
            type="text"
            name="background_image"
            onChange={handleInputChange}
            value={form.background_image}
          />
          <span className={style.error}>{errors.background_image ? errors.background_image : " "}</span>


          <label className={style.labels}>
            Fecha de Lanzamiento:
          </label>
          <input
            className={style.input}
            placeholder="fecha de lanzamiento"
            type="text"
            name="released"
            onChange={handleInputChange}
            value={form.released}
          />
          <span className={style.error}>{errors.released ? errors.released : " "}</span>

          <label className={style.labels}>
            Rating:
          </label>
          <input
            className={style.input}
            placeholder="rating"
            type="number"
            name="rating"
            onChange={handleInputChange}
            value={form.rating}
          />
          <span className={style.error}>{errors.rating ? errors.rating : " "}</span>

          <label className={style.labels} >
            Generos:
          </label>
          {genres.length &&
            genres.map((genre) => (
              <div key={genre}>
                <input
                  type="checkbox"
                  id={genre}
                  name="genres"
                  value={genre}
                  checked={form.genres.includes(genre)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={genre}>{genre}</label>
              </div>
            ))}
          <span className={style.error}>{errors.genres ? errors.genres : " "}</span>

        </div>
        <div>
          <button className={style.button} type="submit">
            Guardar!
          </button>
        </div>

      </form>
    </div>
  )
}

export default CreateGame