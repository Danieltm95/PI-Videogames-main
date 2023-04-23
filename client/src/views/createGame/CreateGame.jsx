import React, { useEffect, useState } from 'react'
import style from './CreateGame.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getGenres } from '../../redux/actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
console.log(form)
  
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
  };

  const genres = useSelector(state => state.genres)




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
    axios.post('/videogames', form)
    alert("Juego creado con exito")
    navigate('/home')

  }
  console.log(form.genres)



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

          <label className={style.labels}>
            Rating:
          </label>
          <input
            className={style.input}
            placeholder="rating"
            type="text"
            name="rating"
            onChange={handleInputChange}
            value={form.rating}
          />

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