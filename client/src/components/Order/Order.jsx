import { useDispatch } from 'react-redux'
import React from 'react'
import style from './Order.module.css'
import { filterOrigen, filterAphabet,  filterRating } from '../../redux/actions'


const Order = () => {
 
    const dispatch = useDispatch()

    const handleDbApi = (e) => {
        dispatch(filterOrigen(e))
        
    }
    const handleAZ = (e) => {
        // console.log(e)
        dispatch ((filterAphabet(e)))
    }
    const handleRating = (e) => {
        // console.log(e)
        dispatch ((filterRating(e)))
    }



  return (
    
        <div className={style.elegir}>
            
            
            <button className={style.button} onClick={() => handleDbApi(true)}>
                Juegos Propios!
            </button>
            <span className={style.span}></span>
            <button className={style.button} onClick={() => handleDbApi(false)}>
                Juegos Existentes!
            </button>
            <span className={style.span}></span>
            <button className={style.button} onClick={() => handleAZ(true)}>
                A a Z!
            </button>
            <span className={style.span}></span>
            <button className={style.button} onClick={() => handleAZ(false)}>
                Z a A!
            </button>
            <span className={style.span}></span>
            <button className={style.button} onClick={() => handleRating(true)}>
                Best Rating!
            </button>
            <span className={style.span}></span>
            <button className={style.button} onClick={() => handleRating(false)}>
                Least Rating!
            </button>

            

        </div>
    
  )
}

export default Order