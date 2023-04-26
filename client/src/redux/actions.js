import { GET_GAMES, GET_GAME, GET_GENRES, GET_BY_NAME,RESET_BY_NAME, FILTER_BY_GENRE, FILTER_ORIGIN, FILTER_BY_AZ, FILTER_BY_RATING} from "./types";
import axios from 'axios';

export const getGames = () => {
    return async function (dispatch)  {
        try {
            const response = await axios.get(`/videogames`);
            //despachamos lo que trajimos de nuestra pai hacia el reducer para que cambie el estado
            console.log("action")
            dispatch({
                type: GET_GAMES, // este va a ser la que entra al switch
                payload: response.data // este va a ser lo que trae la peticion de la api
            })
        } catch (error) {
            console.log(error);
        }
    }
    } 

export const getGameDetail = (id) => {
    return async function (dispatch) {
        try {
            console.log(id)
            const response = await axios.get(`/videogames/${id}`);
            dispatch({
                type: GET_GAME,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getGenres = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`/genres`);
            dispatch({
                type: GET_GENRES,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }

}

export const getByName = (name) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`/videogames/name?name=${name}`);
            dispatch({
                type: GET_BY_NAME,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }

};

export const resetByName = () => {
    return {
        type: RESET_BY_NAME,
    }

}
export const filterByGenre = (genres) => { 
    return {
        type: FILTER_BY_GENRE,
        payload: genres
        
    }

}

export const filterOrigen = (originBolean) => {
    return {
        type: FILTER_ORIGIN,
        payload: originBolean
    }
}

export const filterAphabet = (AZBolean) =>{
  
    return {
        type: FILTER_BY_AZ,
        payload: AZBolean
    }

}

export const filterRating = (RatingBolean) =>{
    return {
        type: FILTER_BY_RATING,
        payload: RatingBolean
    }

}


