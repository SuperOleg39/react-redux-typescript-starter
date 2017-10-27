import { Middleware, MiddlewareAPI, Dispatch, Action } from 'redux';
import { IStore } from '../store';

const logger: Middleware = <S>(store: MiddlewareAPI<S & IStore>) => 
    (next: Dispatch<S>) => 
        (action: any) => {
            console.log('dispatching', action);
            let result = next(action);
            console.log('next state', store.getState());
            return result;
}

export default logger;