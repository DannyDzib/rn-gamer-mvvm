import { type IRegisterUseCaseProps } from './types';
import { type IUser } from '@domain/entities/User';

export const RegisterUseCase = ({ AuthRepository }: IRegisterUseCaseProps) => {
    return {
        run: async (user: IUser) => {
            const data = await AuthRepository.register(user);
            return data;
        },
    };
};
