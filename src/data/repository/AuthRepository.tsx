import { type IAuthDataSource } from '@data/datasource/remote/AuthDataSource';
import { type IUser } from '@domain/entities/User';
import { type IAuthRepository } from '@src/domain/repositories/AuthRepository';

export interface IAuthRepositoryParams {
    AuthDataSource: IAuthDataSource;
}

interface FirebaseAuthError extends Error {
    code: string;
    message: string;
}

export const AuthRepository = ({
    AuthDataSource,
}: IAuthRepositoryParams): IAuthRepository => ({
    login: async (email: string, password: string) => {
        try {
            const data = await AuthDataSource.login(email, password);
            return await Promise.resolve({ result: data, error: null });
        } catch (err: unknown) {
            const error = err as FirebaseAuthError;
            return await Promise.resolve({ result: null, error: error.code });
        }
    },
    register: async (user: IUser) => {
        try {
            const data = await AuthDataSource.register(user);
            return await Promise.resolve({ result: data, error: null });
        } catch (err: unknown) {
            const error = err as FirebaseAuthError;
            return await Promise.resolve({ result: null, error: error.code });
        }
    },
});
