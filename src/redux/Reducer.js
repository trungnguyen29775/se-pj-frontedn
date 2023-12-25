import { GET_USER_DATA, HOME, LOGGED_IN, LOGOUT, SETTING } from '../constant/constant.redux';

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
        case LOGGED_IN: {
            return {
                ...state,
                login: true,
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
        default:
            return {
                ...state,
            };
    }
};
export default Reducer;
