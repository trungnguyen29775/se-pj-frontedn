import { act } from 'react-dom/test-utils';
import {
    ADDRESS,
    ADD_FAVORITE,
    DELETE_FAVORITE,
    FAVORITE,
    GET_FAVORITE_DATA,
    GET_USER_DATA,
    HOME,
    LOGGED,
    LOGOUT,
    ORDER,
    PAYMENT,
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
        case GET_FAVORITE_DATA: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    favorite: action.payload,
                },
            };
        }
        case ADD_FAVORITE: {
            console.log(action.payload);
            return {
                ...state,
                userData: {
                    ...state.userData,
                    favorite: [...state.userData.favorite, action.payload],
                },
            };
        }
        case DELETE_FAVORITE: {
            const targetIndex = state.userData.favorite.indexOf(action.payload);
            return {
                ...state,
                userData: {
                    ...state.userData,
                    favorite: state.userData.favorite
                        .slice(0, targetIndex)
                        .concat(state.userData.favorite.slice(targetIndex + 1, state.userData.favorite.length)),
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
