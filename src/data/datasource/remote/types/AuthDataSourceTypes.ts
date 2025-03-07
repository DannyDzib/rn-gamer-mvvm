import { type FirebaseAuthTypes } from '@react-native-firebase/auth';
import { type IUser } from '@domain/entities/User';

export type GetUserFunction = () => FirebaseAuthTypes.User | null;

export type LoginFunction = (
    email: string,
    password: string,
) => Promise<FirebaseAuthTypes.UserCredential>;

export type RegisterFunction = (
    user: IUser,
) => Promise<FirebaseAuthTypes.UserCredential>;

export type LogoutFunction = () => Promise<void>;
