import { type FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface AuthResult {
    result: FirebaseAuthTypes.UserCredential | null;
    error: unknown | null;
}
