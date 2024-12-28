import { NavigationContainer } from '@react-navigation/native';
import { type ReactElement } from 'react';
import { MainStackNavigator } from './src/presentation/navigation/MainStackNavigator';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App(): ReactElement {
    return (
        <I18nextProvider i18n={i18n}>
            <NavigationContainer>
                <MainStackNavigator />
            </NavigationContainer>
        </I18nextProvider>
    );
}

export default App;
