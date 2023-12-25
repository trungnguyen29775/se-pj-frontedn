import { GET_USER_DATA, HOME, LOGGED_IN, SETTING } from '../constant/constant.redux';

export const loggedIn = () => {
    return {
        type: LOGGED_IN,
    };
};
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
