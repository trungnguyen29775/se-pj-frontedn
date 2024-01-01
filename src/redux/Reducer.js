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
        case ADD_ORDER: {
            let newOrder = action.payload;
            const indexOfOrder = state.orderDataId.indexOf(action.payload.product_id);
            console.log(indexOfOrder);
            if (indexOfOrder === -1) {
                newOrder = { ...newOrder, count: 0 };
                return {
                    ...state,
                    orderDataId: [...state.orderDataId, action.payload.product_id],
                    orderData: [...state.orderData, newOrder],
                };
            } else {
                newOrder = { ...newOrder, count: state.orderData[indexOfOrder].count + 1 };

                return {
                    ...state,
                    orderData: state.orderData
                        .slice(0, indexOfOrder)
                        .concat(newOrder)
                        .concat(state.orderData.slice(indexOfOrder + 1, state.orderData.length)),
                };
            }
        }
        case PLUS_ORDER: {
            const indexOfOrder = state.orderData.indexOf(action.payload);
            let addQuantityOrder = state.orderData[indexOfOrder];
            addQuantityOrder = { ...addQuantityOrder, count: state.orderData[indexOfOrder].count + 1 };
            return {
                ...state,
                orderData: state.orderData
                    .slice(0, indexOfOrder)
                    .concat(addQuantityOrder)
                    .concat(state.orderData.slice(indexOfOrder + 1, state.orderData.length)),
            };
        }

        case MINUS_ORDER: {
            const indexOfOrder = state.orderData.indexOf(action.payload);
            let minusQuantityOrder = state.orderData[indexOfOrder];
            if (state.orderData[indexOfOrder].count === 0) return state;
            minusQuantityOrder = { ...minusQuantityOrder, count: state.orderData[indexOfOrder].count - 1 };
            return {
                ...state,
                orderData: state.orderData
                    .slice(0, indexOfOrder)
                    .concat(minusQuantityOrder)
                    .concat(state.orderData.slice(indexOfOrder + 1, state.orderData.length)),
            };
        }

        case CANCEL_ORDER: {
            const indexOfOrder = state.orderData.indexOf(action.payload);
            return {
                ...state,
                orderData: state.orderData
                    .slice(0, indexOfOrder)
                    .concat(state.orderData.slice(indexOfOrder + 1, state.orderData.length)),
            };
        }

        default: {
            console.log('Hello');
            return state;
        }
    }
};
export default Reducer;
