import { asFunction, type AwilixContainer } from 'awilix';
import { AuthRepository } from '@data/repository/AuthRepository';

export const registerRepositories = (container: AwilixContainer): void => {
    container.register({
        AuthRepository: asFunction(AuthRepository),
    });
};
