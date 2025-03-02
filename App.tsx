import { type ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from '@src/presentation/navigation/MainStackNavigator';
import CustomToast from '@src/presentation/components/CustomToast';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n';

function App(): ReactElement {
    return (
        <I18nextProvider i18n={i18n}>
            <NavigationContainer>
                <MainStackNavigator />
            </NavigationContainer>
            <CustomToast />
        </I18nextProvider>
    );
}

export default App;
