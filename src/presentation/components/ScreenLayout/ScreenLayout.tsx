import { type ReactElement, type ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

const ScreenLayout = ({ children }: { children: ReactNode }): ReactElement => (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        enabled={false}
    >
        {children}
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ScreenLayout;
