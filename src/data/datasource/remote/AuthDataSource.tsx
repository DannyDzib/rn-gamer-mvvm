import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
    type GetUserFunction,
    type RegisterFunction,
    type LoginFunction,
    type LogoutFunction,
} from './types/AuthDataSourceTypes';
import { type IUser } from '@src/domain/entities/User';

export interface IAuthDataSource {
    getUser: GetUserFunction;
    login: LoginFunction;
    register: RegisterFunction;
    logout: LogoutFunction;
}

export const getUser: GetUserFunction = () => {
    return auth().currentUser;
};

export const login: LoginFunction = async (email: string, password: string) => {
    const data = await auth().signInWithEmailAndPassword(email, password);
    return data;
};

export const register: RegisterFunction = async (user: IUser) => {
    const { email, password, username } = user;
    console.log(user);
    const data = await auth().createUserWithEmailAndPassword(email, password);
    console.log(data);
    const myUser = getUser();
    await firestore().collection('Users').doc(myUser?.uid).set({ email, username });
    return data;
};

export const logout: LogoutFunction = async () => {
    const data = await auth().signOut();
    return data;
};
