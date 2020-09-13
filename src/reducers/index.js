import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    account: accountReducer,
    auth: authReducer,
});

export default rootReducer;