import React, { type ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register } from '@presentation/views/auth';

export interface RootStackParamList extends Record<string, object | undefined> {
    LoginScreen: undefined;
    RegisterScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function MainStackNavigator(): ReactElement {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="RegisterScreen" component={Register} />
        </Stack.Navigator>
    );
}
