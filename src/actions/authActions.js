import * as Type from '../constants/acctionTypes';

export const actionSignup = (data) => {
    return {
        type: Type.SIGNUP,
        payload: data
    }
}

export const actionSetAuth = (data) => {
    return {
        type: Type.SET_AUTH,
        payload: data
    }
}