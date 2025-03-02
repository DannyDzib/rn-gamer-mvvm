import { asFunction, type AwilixContainer } from 'awilix';
import { LoginUseCase } from '@application/useCases/auth/LoginUseCase';
import { RegisterUseCase } from '@application/useCases/auth/RegisterUseCase';

export const registerUseCases = (container: AwilixContainer): void => {
    container.register({
        LoginUseCase: asFunction(LoginUseCase),
        RegisterUseCase: asFunction(RegisterUseCase),
    });
};
