import {
    type AuthResultLogout,
    type AuthResult,
    type AuthResultUser,
} from '@domain/entities/AuthResult';
import { type IAuthRepository } from '@domain/repositories/AuthRepository';
import { type IUser } from '@domain/entities/User';

interface IAuthContainer {
    AuthRepository: IAuthRepository;
}

export interface IGetUserUseCaseParams extends IAuthContainer {}

export interface ILoginUseCaseParams extends IAuthContainer {}

export interface ILogoutUseCaseParams extends IAuthContainer {}

export interface IRegisterUseCaseParams extends IAuthContainer {}
export interface IGetUserUseCase {
    run: () => AuthResultUser;
}
export interface ILoginUseCase {
    run: (email: string, password: string) => Promise<AuthResultLogout>;
}
export interface IRegisterUseCase {
    run: (user: IUser) => Promise<AuthResult>;
}
export interface ILogoutUseCase {
    run: () => Promise<AuthResultLogout>;
}
