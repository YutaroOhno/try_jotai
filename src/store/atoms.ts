import { atom } from 'jotai';

export interface ITodo {
    uuid: string
    title: string
    completed: boolean
}

export const todoListState = atom<ITodo[]>([]);
