import { type IRegisterUseCaseProps } from './types';
import { type IUser } from '@domain/entities/User';

export const RegisterUseCase = ({ AuthRepository }: IRegisterUseCaseProps) => {
    return {
        run: async (user: IUser) => {
            return await AuthRepository.register(user);
        },
    };
};
