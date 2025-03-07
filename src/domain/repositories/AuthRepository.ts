import {
    type AuthResultLogout,
    type AuthResult,
    type AuthResultUser,
} from '../entities/AuthResult';
import { type IUser } from '../entities/User';

export interface IAuthRepository {
    getUser: () => AuthResultUser;
    login: (email: string, password: string) => Promise<AuthResult>;
    register: (user: IUser) => Promise<AuthResult>;
    logout: () => Promise<AuthResultLogout>;
}
