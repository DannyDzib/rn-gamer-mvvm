import React, { type ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@presentation/views/home';

export interface AppStackParamList extends Record<string, object | undefined> {
    HomeScreen: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStackNavigator(): ReactElement {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeScreen" component={Home} />
        </Stack.Navigator>
    );
}
