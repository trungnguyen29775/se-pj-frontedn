import { type } from '@testing-library/user-event/dist/type';
import {
    ADDRESS,
    GET_USER_DATA,
    GET_ADDRESS_DATA,
    HOME,
    LOGGED,
    ORDER,
    SETTING,
    PAYMENT,
    FAVORITE,
    PLUS_ORDER,
    MINUS_ORDER,
    ADD_ORDER,
    CANCEL_ORDER,
} from '../constant/constant.redux';

export const navSetting = () => {
    return {
        type: SETTING,
    };
};

export const navHome = () => {
    return {
        type: HOME,
    };
};

export const getUserData = (payload) => {
    return {
        type: GET_USER_DATA,
        payload,
    };
};

export const getAddressData = (payload) => {
    return {
        type: GET_ADDRESS_DATA,
        payload,
    };
};

export const logged = () => {
    return {
        type: LOGGED,
    };
};

export const navOrder = () => {
    return {
        type: ORDER,
    };
};

export const navAddress = () => {
    return {
        type: ADDRESS,
    };
};

export const navPayment = () => {
    return {
        type: PAYMENT,
    };
};

export const navFavorite = () => {
    return {
        type: FAVORITE,
    };
};

export const addOrder = (payload) => {
    return {
        type: ADD_ORDER,
        payload,
    };
};

export const plusOrder = (payload) => {
    return {
        type: PLUS_ORDER,
        payload,
    };
};

export const minusOrder = (payload) => {
    return {
        type: MINUS_ORDER,
        payload,
    };
};

export const cancelOrder = (payload) => {
    return {
        type: CANCEL_ORDER,
        payload,
    };
};
