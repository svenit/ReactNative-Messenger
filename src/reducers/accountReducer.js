import * as Type from '../constants/acctionTypes';

let initialState = [
    {
        id: 1,
        username: 'lequangvy',
        password: '123456',
        fullName: 'Lê Quang Vỹ',
        avatar: require('../assets/images/avatar/1.jpeg'),
        isOnline: true,
    },
    {
        id: 2,
        username: 'lethiphuong',
        password: '123456',
        fullName: 'Lê Thị Phương',
        avatar: require('../assets/images/avatar/2.jpeg'),
        isOnline: true,
    },
    {
        id: 3,
        username: 'nguyenthanhtra',
        password: '123456',
        fullName: 'Nguyễn Thanh Trà',
        avatar: require('../assets/images/avatar/3.jpeg'),
        isOnline: true,
    },
    {
        id: 4,
        username: '1',
        password: '1',
        fullName: 'Tester',
        avatar: require('../assets/images/avatar/4.jpeg'),
        isOnline: true,
    },
    {
        id: 5,
        username: '2',
        password: '2',
        fullName: 'Athena',
        avatar: require('../assets/images/avatar/5.jpeg'),
        isOnline: true,
    },
    {
        id: 6,
        username: '3',
        password: '3',
        fullName: 'John Doe',
        avatar: require('../assets/images/avatar/6.jpeg'),
        isOnline: true,
    },
    {
        id: 7,
        username: '4',
        password: '4',
        fullName: 'Peter',
        avatar: require('../assets/images/avatar/7.jpeg'),
        isOnline: true,
    },
    {
        id: 8,
        username: '5',
        password: '5',
        fullName: 'Senna',
        avatar: require('../assets/images/avatar/8.jpeg'),
        isOnline: true,
    },
    {
        id: 9,
        username: '6',
        password: '6',
        fullName: 'Lenona',
        avatar: require('../assets/images/avatar/9.jpeg'),
        isOnline: true,
    },
    {
        id: 10,
        username: '7',
        password: '7',
        fullName: 'Lina',
        avatar: require('../assets/images/avatar/10.jpeg'),
        isOnline: true,
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