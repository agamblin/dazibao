import { combineReducers } from 'redux';
import authReducer from './auth';
import affichesReducer from './affiches';

export default combineReducers({
    auth: authReducer,
    affiches: affichesReducer,
});
