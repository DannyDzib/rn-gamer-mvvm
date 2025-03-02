import { type AuthResult } from '@domain/entities/AuthResult';
import { type IAuthRepository } from '@domain/repositories/AuthRepository';
import { type IUser } from '@domain/entities/User';

export interface ILoginUseCaseProps {
    AuthRepository: IAuthRepository;
}

export interface IRegisterUseCaseProps {
    AuthRepository: IAuthRepository;
}

export interface ILoginUseCase {
    run: (email: string, password: string) => Promise<AuthResult>;
}

export interface IRegisterUseCase {
    run: (user: IUser) => Promise<AuthResult>;
}
