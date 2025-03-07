import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '@presentation/hooks/useAuth';
import { AuthStackNavigator } from './stacks/AuthStackNavigator';
import { AppStackNavigator } from './stacks/AppStackNavigator';

export interface RootStackParamList extends Record<string, object | undefined> {
    AuthNavigation: undefined;
    AppNavigation: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function MainStackNavigator() {
    const user = useAuth();

    const { name, component } = user
        ? { name: 'AppNavigation', component: AppStackNavigator }
        : { name: 'AuthNavigation', component: AuthStackNavigator };

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={name} component={component} />
        </Stack.Navigator>
    );
}
