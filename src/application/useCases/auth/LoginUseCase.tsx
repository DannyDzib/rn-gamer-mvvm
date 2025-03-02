import { type ILoginUseCase, type ILoginUseCaseProps } from './types';

export const LoginUseCase = ({
    AuthRepository,
}: ILoginUseCaseProps): ILoginUseCase => ({
    run: async (email: string, password: string) => {
        return await AuthRepository.login(email, password);
    },
});
