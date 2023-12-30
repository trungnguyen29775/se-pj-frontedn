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
    GET_FAVORITE_DATA,
    ADD_FAVORITE,
    DELETE_FAVORITE,
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

export const getFavoriteData = (payload) => {
    return {
        type: GET_FAVORITE_DATA,
        payload: payload,
    };
};

export const addFavorite = (payload) => {
    return {
        type: ADD_FAVORITE,
        payload: payload,
    };
};

export const deleteFavorite = (payload) => {
    return {
        type: DELETE_FAVORITE,
        payload: payload,
    };
};
