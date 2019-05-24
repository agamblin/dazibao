import {
    AUTH_LOGIN,
    AUTH_ERROR,
    AUTH_LOGOUT,
    FETCH_USER,
} from '@/actions/types';
import { IAuthState, IAction } from 'src/typings/states/global';

export default (state = {} as IAuthState, action: IAction) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                token: action.payload,
                errorMsg: undefined,
            };
        case AUTH_ERROR:
            return {
                ...state,
                errorMsg: action.payload,
                user: undefined,
                token: undefined,
            };
        case FETCH_USER:
            return {
                ...state,
                user: action.payload,
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                token: undefined,
                user: undefined,
                errorMsg: undefined,
            };
        default:
            return state;
    }
};
