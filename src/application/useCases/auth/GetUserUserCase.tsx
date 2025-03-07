import { type IGetUserUseCaseParams, type IGetUserUseCase } from './types';

export const GetUserUseCase = ({
    AuthRepository,
}: IGetUserUseCaseParams): IGetUserUseCase => ({
    run: () => {
        return AuthRepository.getUser();
    },
});
