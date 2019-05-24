export interface IState {
    auth: IAuthState;
    affiches: IAfficheState[];
}

export interface IAction {
    type: string;
    // tslint:disable-next-line: no-any
    payload?: any;
}

export interface IAuthState {
    token?: string;
    user?: IUser;
    errorMsg?: string;
}

export interface IUser {
    id: number;
    username: string;
    updatedAt: Date;
    createdAt: Date;
}

export interface IAfficheState {
    id: number;
    imageUrl: string;
    description: string;
    updatedAt: Date;
    createdAt: Date;
}
