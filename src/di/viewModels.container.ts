import { asFunction, type AwilixContainer } from 'awilix';
import LoginViewModel from '@presentation/views/auth/login/ViewModel';
import RegisterViewModel from '@presentation/views/auth/register/ViewModel';
import HomeViewModel from '@presentation/views/home/ViewModel';

export const registerViewModels = (container: AwilixContainer): void => {
    container.register({
        LoginViewModel: asFunction(LoginViewModel),
        RegisterViewModel: asFunction(RegisterViewModel),
        HomeViewModel: asFunction(HomeViewModel),
    });
};
