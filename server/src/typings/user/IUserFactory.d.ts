import IUser from '@typings/user/IUser';

export default interface IUserFactory {
    create?: (data: IUser) => Promise<IUser>;
}
