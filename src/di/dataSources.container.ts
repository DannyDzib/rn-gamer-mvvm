import { asValue, type AwilixContainer } from 'awilix';
import * as AuthDataSource from '@data/datasource/remote/AuthDataSource';

export const registerDataSources = (container: AwilixContainer): void => {
    container.register({
        AuthDataSource: asValue(AuthDataSource),
    });
};
