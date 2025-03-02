// SERVICE - INFORMATION
import auth, { type FirebaseAuthTypes } from '@react-native-firebase/auth';
import { type IUser } from '@domain/entities/User';

type ILogin = (
    email: string,
    password: string,
) => Promise<FirebaseAuthTypes.UserCredential>;

type IRegister = (user: IUser) => Promise<FirebaseAuthTypes.UserCredential>;

export interface IAuthDataSource {
    login: ILogin;
    register: IRegister;
}

export const login: ILogin = async (email: string, password: string) => {
    const data = await auth().signInWithEmailAndPassword(email, password);
    return data;
};

export const register: IRegister = async (user: IUser) => {
    const { email, password } = user;
    const data = await auth().createUserWithEmailAndPassword(email, password);
    return data;
};
