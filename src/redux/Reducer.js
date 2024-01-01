import {
    ADDRESS,
    ADD_FAVORITE,
    FAVORITE,
    GET_FAVORITE_DATA,
    GET_USER_DATA,
    HOME,
    LOGGED,
    LOGOUT,
    ORDER,
    PAYMENT,
    REMOVE_FAVORITE,
    SETTING,
} from '../constant/constant.redux';

export const initState = {
    login: false,
    element: 'HOME',
    userData: {
        name: '',
        email: '',
        userId: '',
        isAdmin: '',
        favorite: [],
    },
};

const Reducer = (state, action) => {
    switch (action.type) {
        case SETTING: {
            return {
                ...state,
                element: SETTING,
            };
        }
        case HOME: {
            return {
                ...state,
                element: HOME,
            };
        }

        case LOGOUT: {
            return initState;
        }
        case GET_USER_DATA: {
            return {
                ...state,
                userData: action.payload,
            };
        }

        case LOGGED: {
            return {
                ...state,
                login: true,
            };
        }
        case ORDER:
            return {
                ...state,
                element: ORDER,
            };
        case ADDRESS: {
            return {
                ...state,
                element: ADDRESS,
            };
        }
        case FAVORITE: {
            return {
                ...state,
                element: FAVORITE,
            };
        }
        case ADD_FAVORITE:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    favorite: [...state.userData.favorite, action.payload],
                },
            };

        case REMOVE_FAVORITE:
            const indexOfFavorite = state.userData.favorite.indexOf(action.payload);
            console.log(indexOfFavorite);
            return {
                ...state,
                userData: {
                    ...state.userData,
                    favorite: state.userData.favorite
                        .slice(0, indexOfFavorite)
                        .concat(state.userData.favorite.slice(indexOfFavorite + 1, state.userData.favorite.length)),
                },
            };
        case GET_FAVORITE_DATA: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    favorite: action.payload,
                },
            };
        }
        default: {
            console.log('Hello');
            return state;
        }
    }
};
export default Reducer;
