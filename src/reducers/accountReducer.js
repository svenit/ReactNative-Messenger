import * as Type from '../constants/acctionTypes';
import users from '../api/users';

let initialState = users;

const accountReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Type.SIGNUP:
            state = [...state, payload];
            return state;
        default:
            return [...state];
    }
};

export default accountReducer;