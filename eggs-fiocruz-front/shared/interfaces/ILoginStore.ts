import { Action, Thunk } from 'easy-peasy';
import { AuthProps } from '../types/forms/login';
import { ILoginData } from './ILoginData';

export interface ILoginStore extends ILogin {
    handleUserLogin: Thunk<ILoginStore, AuthProps>;
    addLoginStateDate: Action<ILoginStore, ILoginData>;
}
export interface ILogin {
    user: {
        email: string;
        user_id: string;
        f_name: string;
        l_name: string;
        access_token: string;
    }
}
