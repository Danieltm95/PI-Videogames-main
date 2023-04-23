import CardContainer from '../../components/CardContainer/CardContainer'
import styles from './Home.module.css'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { getGames } from '../../redux/actions'


const Home = () => {
const dispatch = useDispatch()
  //cuando se monte que haga el dispatch para traer todas las cards
// eslint-disable-next-line
  useEffect(() => {
    dispatch(getGames());
    //console.log('dispatch de use efelct')
  },[dispatch]);
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <CardContainer/>

    </div>
  )
}

export default Home