import React, { type ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@presentation/views/home';
import TabNavigator from '@src/presentation/navigation/stacks/TabNavigator';

export interface AppStackParamList extends Record<string, object | undefined> {
    // HomeScreen: undefined;
    TabsScreen: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStackNavigator(): ReactElement {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="TabsScreen" component={TabNavigator} />
            <Stack.Screen name="HomeScreen" component={Home} />
        </Stack.Navigator>
    );
}
