import { useState } from 'react'
import React from 'react'
import style from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { getByName } from '../../redux/actions'
import searchbutton from '../../helper/searchbutton.png'

const SearchBar = () => {

    const [name, setName] = useState("");

    const dispatch = useDispatch();
    const handleClick = (e) => {

        if (name === "") {
            alert("Ingresa un nombre para buscar")
        } else {
            dispatch(
                getByName(name),
                setName(""),

            )
        }
    }





    return (
        <div className={style.container}>
            <input
                type="text"
                placeholder="Busca un Juego!"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={style.input} />
            <button className={style.button} onClick={handleClick}>
                <img src={searchbutton} className={style.Searchimg} alt='botonsearch' />
            </button>

        </div>
    )
}

export default SearchBar