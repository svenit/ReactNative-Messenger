import * as Type from '../constants/acctionTypes';

let initialState = {};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Type.SET_AUTH:
            state = payload;
            return state;
        default:
            return state;
    }
};

export default authReducer;