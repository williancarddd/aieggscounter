import { ILoginData } from '../../interfaces/ILoginData';

export type LoginForm = {
    email: string
    password: string
};

export type AuthProps = {
    email: string,
    password: string
};

export type LoginResponseProps = {
    user: ILoginData
};
