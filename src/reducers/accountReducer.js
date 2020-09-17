import * as Type from '../constants/acctionTypes';

let initialState = [
    {
        id: 1,
        username: 'lequangvy',
        password: '123456',
        fullName: 'Lê Quang Vỹ',
        avatar: null,
        isOnline: true,
        friends: [2, 3]
    },
    {
        id: 2,
        username: 'lethiphuong',
        password: '123456',
        fullName: 'Lê Thị Phương',
        avatar: null,
        isOnline: false,
        friends: [1]
    },
    {
        id: 3,
        username: 'nguyenthanhtra',
        password: '123456',
        fullName: 'Nguyễn Thanh Trà',
        avatar: null,
        isOnline: true,
        friends: [1]
    },
];

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