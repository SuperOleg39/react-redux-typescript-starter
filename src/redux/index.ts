import { combineReducers } from 'redux';
import fieldReducer from './field';

export default combineReducers({
    field: fieldReducer
});