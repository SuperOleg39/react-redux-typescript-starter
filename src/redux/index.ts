import { combineReducers } from 'redux';
import fieldReducer from './field';
import usersReducer from './users';

export default combineReducers({
    field: fieldReducer,
    users: usersReducer
});