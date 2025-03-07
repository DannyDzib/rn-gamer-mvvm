import { type FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface AuthResult {
    result: FirebaseAuthTypes.UserCredential | null;
    error: unknown | null;
}

export interface AuthResultLogout {
    result: unknown | null;
    error: unknown | null;
}

export interface AuthResultUser {
    result: FirebaseAuthTypes.User | null;
    error: unknown | null;
}
