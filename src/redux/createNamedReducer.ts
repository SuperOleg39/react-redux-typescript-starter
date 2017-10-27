import { Reducer, Action } from 'redux';
import { IStore } from '../store';

/**
 * От этого интерфейса можно наследовать действия, для 
 * редьюсеров, обернутых в createNamedReducer
 */
export interface namedAction extends Action {
  name: string;
}

function createNamedReducer<S>(reducer: Reducer<S>, reducerName: string): Reducer<S> {
    return (state: S, action: namedAction) => {
        const { name } = action;
        const isInitializationCall = state === undefined;

        if (name !== reducerName && !isInitializationCall) {
            return state;
        }

        return reducer(state, action);    
    }
}

export default createNamedReducer;