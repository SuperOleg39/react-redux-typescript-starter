import { Dispatch } from 'redux';
import { IStore } from '../store';
import * as client from '../services/users';

// Упрощаем интерфейс серверной ошибки
export type Error = any;

// Типовой интерфейс для хранения состояния любого http запроса
interface AsyncState<D> {
    isFetching: boolean;
    error: Error;
    data: D;
}

// Для уменьшения количества действий, определяем их состояние по статусам
interface AsyncAction<P> {
    status?: 'error' | 'success';
    payload?: P | Error;
}

/**
 * State
 */
export interface UsersState {
    get: AsyncState<client.IUser>;
    getList: AsyncState<client.IUser[]>;
}

const initialState: UsersState = {
    get: {
        isFetching: false,
        error: null,
        data: null
    },
    getList: {
        isFetching: false,
        error: null,
        data: []
    }
}

/**
 * Constants
 */
const GET = 'users/GET';
type GET = typeof GET;

const GET_LIST = 'users/GET_LIST';
type GET_LIST = typeof GET_LIST;

/** 
 * Actions
 */
export interface GetAction extends AsyncAction<client.IUser> {
    type: GET;
}

export interface GetListAction extends AsyncAction<client.IUser[]> {
    type: GET_LIST;
}

type UsersAction = GetAction | GetListAction;

export default function reducer(state: UsersState = initialState, action: UsersAction): UsersState {
    switch (action.type) {
        case GET:
            if (!action.status) {
                return {
                    ...state,
                    get: {
                        ...state.get,
                        isFetching: true,
                        error: null
                    }
                }
            }

            if (action.status === 'error') {
                return {
                    ...state,
                    get: {
                        isFetching: false,
                        error: action.payload,
                        data: null
                    }
                }
            }

            return {
                ...state,
                get: {
                    isFetching: false,
                    error: null,
                    data: action.payload
                }
            }
        case GET_LIST:
            if (!action.status) {
                return {
                    ...state,
                    getList: {
                        ...state.getList,
                        isFetching: true,
                        error: null
                    }
                }
            }

            if (action.status === 'error') {
                return {
                    ...state,
                    getList: {
                        isFetching: false,
                        error: action.payload,
                        data: []
                    }
                }
            }

            return {
                ...state,
                getList: {
                    isFetching: false,
                    error: null,
                    data: action.payload
                }
            }
        default:
            return state;
    }
}

/** 
 * Action Creators
 */
export const getActionCreator = (
    status?: 'error' | 'success',
    payload?: client.IUser | Error
): GetAction => ({
    type: GET,
    status,
    payload,
});

export const getListActionCreator = (
    status?: 'error' | 'success',
    payload?: client.IUser[] | Error
): GetListAction => ({
    type: GET_LIST,
    status,
    payload,
});

/**
 * Thunk Actions
 */
 export function get(id: number) {
    return async (dispatch: Dispatch<IStore>, getState: () => IStore) => {
        dispatch(getActionCreator());

        try {
            const response = await client.get(id);
            dispatch(getActionCreator('success', response.data));
        } catch (e) {
            dispatch(getActionCreator('error', e));
            throw new Error(e);
        }
    }
}

export function getList() {
   return async (dispatch: Dispatch<IStore>, getState: () => IStore) => {
       dispatch(getListActionCreator());

       try {
           const response = await client.getList();
           dispatch(getListActionCreator('success', response.data));
       } catch (e) {
           dispatch(getListActionCreator('error', e));
           throw new Error(e);
       }
   }
}