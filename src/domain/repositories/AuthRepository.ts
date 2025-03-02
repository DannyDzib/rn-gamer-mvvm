import { type AuthResult } from '../entities/AuthResult';
import { type IUser } from '../entities/User';

export interface IAuthRepository {
    login: (email: string, password: string) => Promise<AuthResult>;
    register: (user: IUser) => Promise<unknown>;
}
