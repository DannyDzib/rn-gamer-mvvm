/* eslint-disable import/no-cycle */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register } from '@presentation/views/auth';

export interface RootStackParamList extends Record<string, object | undefined> {
    LoginScreen: undefined;
    RegisterScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function MainStackNavigator() {
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
