import { type AwilixContainer, createContainer } from 'awilix';
import { registerViewModels } from './viewModels.container';
import { registerDataSources } from './dataSources.container';
import { registerRepositories } from './repositories.container';
import { registerUseCases } from './useCases.container';

const container: AwilixContainer = createContainer();

registerViewModels(container);
registerDataSources(container);
registerRepositories(container);
registerUseCases(container);

export default container;
