import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

export const useAuth = () => {
    const [user, setUser] = useState(auth().currentUser);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(setUser);
        return () => unsubscribe();
    }, []);
    console.log('useer ====>>', user);
    return user;
};
