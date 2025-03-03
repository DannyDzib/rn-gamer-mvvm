import { type ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from '@presentation/navigation/MainStackNavigator';
import CustomToast from '@presentation/components/CustomToast';
import { LoadingProvider } from '@presentation/components/Loading/LoadingContext';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App(): ReactElement {
    return (
        <I18nextProvider i18n={i18n}>
            <LoadingProvider>
                <NavigationContainer>
                    <MainStackNavigator />
                </NavigationContainer>
                <CustomToast />
            </LoadingProvider>
        </I18nextProvider>
    );
}

export default App;
