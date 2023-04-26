import { GET_GAMES, GET_GAME, GET_GENRES, GET_BY_NAME, RESET_BY_NAME, FILTER_BY_GENRE, FILTER_ORIGIN, FILTER_BY_AZ, FILTER_BY_RATING } from "./types";

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    game: {},
    nameSearchChecked: false,


}



const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_GAMES:
            // console.log("actions get games")
            return {
                ...state,
                allVideogames: action.payload,
                videogames: action.payload,
                nameSearchChecked: false
            };
        case GET_GAME:
            return {
                ...state,
                game: action.payload
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            };
        case GET_BY_NAME:
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload,

            }

        case RESET_BY_NAME:
            return {
                ...state,
                nameSearchChecked: true,
            }
        case FILTER_BY_GENRE:
            //console.log(state.allVideogames, "state all")
            let genresFilterd = state.allVideogames.filter(el => el.genres.includes(action.payload))
            if (genresFilterd.length === 0) {
                alert('No hay juegos con ese genero! Escoge otro!')
                return {
                    ...state,
                    videogames: state.allVideogames
                }
            }
            return {
                ...state,
                videogames: genresFilterd,
            }

        case FILTER_ORIGIN:
            let gamesDb = state.allVideogames.filter(el => typeof (el.id) !== "number")
            let gamesApi = state.allVideogames.filter(el => typeof (el.id) === "number")
            if (action.payload) {
                return {
                    ...state,
                    videogames: gamesDb
                }
            }
            return {
                ...state,
                videogames: gamesApi
            }

        case FILTER_BY_AZ:

            //console.log(action.payload, "reducer")
            let arrayAZ = [...state.videogames];
            //console.log(arrayAZ[0])
            arrayAZ.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            })
            //console.log(arrayAZ[0])
            if (action.payload) {
                //console.log("entra al if de true ")
                return {
                    ...state,
                    videogames: arrayAZ
                }
            }

            let arrayAZReverse = arrayAZ.reverse();
            return {
                ...state,
                videogames: arrayAZReverse
            }

        case FILTER_BY_RATING:

            let arrayRating = [...state.videogames];

            arrayRating.sort((a, b) => {
                if (a.rating < b.rating) {
                    return 1;
                }
                if (a.rating > b.rating) {
                    return -1;
                }
                return 0;
            })
            //console.log(arrayAZ[0])
            if (action.payload) {
                //console.log("entra al if de true ")
                return {
                    ...state,
                    videogames: arrayRating
                }
            }

            let arrayRatingReverse = arrayRating.reverse();
            return {
                ...state,
                videogames: arrayRatingReverse
            }


        default:
            return state;
    }
}



export default rootReducer;








// if(action.payload){
//     console.log("entra al if de true ")
//     return {
//         ...state,
//         videogames: (state.allVideogames.sort((a, b) => {
//             const nameA = a.name.toUpperCase();
//             const nameB = b.name.toUpperCase();
//             if (nameA < nameB) {
//                 return -1;
//             }
//             if (nameA > nameB) {
//                 return 1;
//             }
//             return 0;
//         }))
//     }
// }