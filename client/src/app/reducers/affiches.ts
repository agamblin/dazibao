import { FETCH_AFFICHES } from '@/actions/types';
import { IAction, IAfficheState } from 'src/typings/states/global';
import { CREATE_AFFICHE } from '../actions/types';

export default (state = [] as IAfficheState[], action: IAction) => {
    switch (action.type) {
        case FETCH_AFFICHES:
            return action.payload;
        case CREATE_AFFICHE:
            return [...state, action.payload];
        default:
            return state;
    }
};
