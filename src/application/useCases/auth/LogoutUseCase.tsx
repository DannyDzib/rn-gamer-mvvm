import { type ILogoutUseCase, type ILogoutUseCaseParams } from './types';

export const LogoutUseCase = ({
    AuthRepository,
}: ILogoutUseCaseParams): ILogoutUseCase => ({
    run: async () => {
        return await AuthRepository.logout();
    },
});
