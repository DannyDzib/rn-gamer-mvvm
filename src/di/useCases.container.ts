import { asFunction, type AwilixContainer } from 'awilix';
import { LoginUseCase } from '@application/useCases/auth/LoginUseCase';
import { RegisterUseCase } from '@application/useCases/auth/RegisterUseCase';
import { LogoutUseCase } from '@application/useCases/auth/LogoutUseCase';
import { GetUserUseCase } from '@application/useCases/auth/GetUserUserCase';

export const registerUseCases = (container: AwilixContainer): void => {
    container.register({
        GetUserUseCase: asFunction(GetUserUseCase),
        LoginUseCase: asFunction(LoginUseCase),
        RegisterUseCase: asFunction(RegisterUseCase),
        LogoutUseCase: asFunction(LogoutUseCase),
    });
};
