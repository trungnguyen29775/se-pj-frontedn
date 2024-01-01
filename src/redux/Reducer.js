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
    ADD_ORDER,
    PLUS_ORDER,
    MINUS_ORDER,
    CANCEL_ORDER,
} from '../constant/constant.redux';

export const initState = {
    login: false,
    element: 'HOME',
    userData: {
        name: '',
        email: '',
        userId: '',
        isAdmin: '',
        phoneNum: '',
        favorite: [],
    },
    orderData: [],
    orderDataId: [],
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
        default: {
            console.log('Hello');
            return state;
        }
    }
};
export default Reducer;
