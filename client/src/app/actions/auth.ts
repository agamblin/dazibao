import { IAction, IState } from 'src/typings/states/global';
import api from '@/api';
import { AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT, FETCH_USER } from './types';

export const signIn = (username: string, password: string) => async (
    dispatch: (source: IAction) => void
) => {
    try {
        const {
            data: { token },
        } = await api.post('/users/token', { username, password });
        localStorage.setItem('dazibaoToken', token);
        dispatch({ type: AUTH_LOGIN, payload: token });
    } catch ({ response: { status } }) {
        let errorMsg;

        switch (status) {
            case 401:
                errorMsg = 'Invalid credentials';
                break;
            case 404:
                errorMsg = 'Username not found';
                break;
            default:
                errorMsg = 'Internal server error';
                break;
        }
        dispatch({ type: AUTH_ERROR, payload: errorMsg });
    }
};

export const signOut = () => async (dispatch: (source: IAction) => void) => {
    localStorage.removeItem('dazibaoToken');
    dispatch({ type: AUTH_LOGOUT });
};

export const fetchUserInfo = () => async (
    dispatch: (source: IAction) => void,
    getState: () => IState
) => {
    const token = getState().auth.token;

    try {
        const { data } = await api.get('/users/token', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        dispatch({ type: FETCH_USER, payload: data });
    } catch ({ response }) {
        dispatch({ type: AUTH_LOGOUT });
    }
};
