import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../redux';
import { FieldState } from '../redux/field';
import logger from '../middlewares/logger';

export interface IStore {
    field: FieldState
}

let composeEnhancers = compose;
const middlewares = [
    logger
];

if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const configureStore = (initialState?: IStore) => {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares)
        )
    )
};

export default configureStore;