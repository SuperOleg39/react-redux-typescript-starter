import { createStore } from 'redux';
import rootReducer from '../redux';
import { FieldState } from '../redux/field';

export interface IStore {
    field: FieldState
}

const configureStore = (initialState?: IStore) => {
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
};

export default configureStore;