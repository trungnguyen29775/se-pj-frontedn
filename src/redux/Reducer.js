import { ADDRESS, GET_USER_DATA, HOME, LOGGED, LOGOUT, ORDER, SETTING } from '../constant/constant.redux';

export const initState = {
    login: false,
    element: 'HOME',
    userData: {
        name: '',
        email: '',
        userId: '',
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
            return {
                ...state,
                login: false,
            };
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
        default: {
            console.log('Hello');
            return state;
        }
    }
};
export default Reducer;
