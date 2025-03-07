import React, { type ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register } from '@presentation/views/auth';

export interface AuthStackParamList extends Record<string, object | undefined> {
    LoginScreen: undefined;
    RegisterScreen: undefined;
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStackNavigator(): ReactElement {
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
