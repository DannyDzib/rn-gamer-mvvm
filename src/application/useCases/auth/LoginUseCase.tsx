import { type ILoginUseCaseParams, type ILoginUseCase } from './types';

export const LoginUseCase = ({
    AuthRepository,
}: ILoginUseCaseParams): ILoginUseCase => ({
    run: async (email: string, password: string) => {
        return await AuthRepository.login(email, password);
    },
});
