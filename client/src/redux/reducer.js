import { GET_GAMES, GET_GAME, GET_GENRES } from "./types";

const initialState = {
    videogames: [],
    genres: [],
    game: {}

}



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAMES:
            // console.log("actions get games")
            return {
                ...state,
                videogames: action.payload
            };
        case GET_GAME:
            return {
                ...state,
                game: action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state;
    }
}



export default rootReducer;