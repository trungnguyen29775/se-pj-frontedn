import {
    ADDRESS,
    FAVORITE,
    GET_USER_DATA,
    HOME,
    LOGGED,
    LOGOUT,
    ORDER,
    PAYMENT,
    SETTING,
    ORDER_PRODUCT,
} from '../constant/constant.redux';

export const initState = {
    login: false,
    element: 'HOME',
    userData: {
        name: '',
        email: '',
        userId: '',
        isAdmin: '',
    },
    orderData: {
        //name : quantity
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
        case ORDER_PRODUCT: {
            return {
                ...state,
                orderData: {
                    ...state.orderData,
                    [action.name]: action.quantity,
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
