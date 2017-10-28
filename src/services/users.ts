import { AxiosPromise } from 'axios';
import client from './client';

// Опишем упрощенный интерфейс ответа от сервера
export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: any;
    phone: string;
    website: string;
    company: any;
}

export function get(id: number): AxiosPromise<IUser> {
    return client.get(`/users/${id}`);
}

export function getList(): AxiosPromise<IUser[]> {
    return client.get('/users');
}