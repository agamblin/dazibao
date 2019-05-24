import api from '@/api';
import Axios from 'axios';
import { IAction, IState } from 'src/typings/states/global';
import { FETCH_AFFICHES, AUTH_ERROR, CREATE_AFFICHE } from './types';

export const fetchAffiches = () => async (
    dispatch: (source: IAction) => void
) => {
    try {
        const { data } = await api.get('/affiches');
        dispatch({ type: FETCH_AFFICHES, payload: data });
    } catch ({ response }) {
        dispatch({ type: AUTH_ERROR });
    }
};

// tslint:disable-next-line: no-any
export const createAffiche = (file: any, description: string) => async (
    dispatch: (source: IAction) => void,
    getState: () => IState
) => {
    try {
        const token = getState().auth.token;
        const {
            data: { affiche, url },
        } = await api.post(
            '/affiches',
            {
                description,
                fileType: file.type,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        await Axios.put(url, file, {
            headers: {
                'Content-Type': file.type,
            },
        });
        dispatch({ type: CREATE_AFFICHE, payload: affiche });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
    }
};
