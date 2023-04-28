import CardContainer from '../../components/CardContainer/CardContainer'
import SearchBar from '../../components/SearchBar/SearchBar'
import style from './Home.module.css'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { getGames, getGenres, resetByName } from '../../redux/actions'
import Genre from '../../components/Genres/Genre'
import Order from '../../components/Order/Order'



const Home = () => {
  const dispatch = useDispatch()
  //cuando se monte que haga el dispatch para traer todas las cards

  useEffect(() => {
    dispatch(getGames())
    dispatch(getGenres());
    dispatch(resetByName());

  }, [dispatch]);



  return (
    <div className={style.container}>
      <div className={style.containerFuncionales}>
        <SearchBar />
        <Order />
        <Genre />
      </div>
      <CardContainer />
    </div>
  )
}

export default Home

// return (
//   <div className={style.container}>

//     <div className={style.containerSearch}>
//       <SearchBar/>
//       <Order/>
//     </div>
//     <div className={style.containerGenres}>
//       <Genre />
//     </div>
//     <div className={style.containerCards}>
//       <CardContainer/>
//     </div>
//   </div>
// )
// }
