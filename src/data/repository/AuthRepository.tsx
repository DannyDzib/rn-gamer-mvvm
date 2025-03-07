import { type IUser } from '@domain/entities/User';
import { type IAuthRepository } from '@domain/repositories/AuthRepository';
import { type FirebaseAuthError } from '@src/shared/types/AuthTypes';
import { type IAuthDataSource } from '../datasource/remote/AuthDataSource';

export interface IAuthRepositoryParams {
    AuthDataSource: IAuthDataSource;
}

export const AuthRepository = ({
    AuthDataSource,
}: IAuthRepositoryParams): IAuthRepository => ({
    getUser: () => {
        try {
            const data = AuthDataSource.getUser();
            return { result: data, error: null };
        } catch (err: unknown) {
            const error = err as FirebaseAuthError;
            return { result: null, error: error.code };
        }
    },
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
    logout: async () => {
        try {
            const data = await AuthDataSource.logout();
            return await Promise.resolve({ result: data, error: null });
        } catch (err: unknown) {
            const error = err as FirebaseAuthError;
            return await Promise.resolve({ result: null, error: error.code });
        }
    },
});
