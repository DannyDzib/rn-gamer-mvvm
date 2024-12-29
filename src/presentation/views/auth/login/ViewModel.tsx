import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import auth from '@react-native-firebase/auth';

interface IFormInputs {
    email: string;
    password: string;
}

const LoginViewModel = (): unknown => {
    const { t } = useTranslation('common');
    const schema = z.object({
        email: z
            .string()
            .min(1, t('FORM_VALIDATION_FIELD_REQUIRED'))
            .email(t('FORM_VALIDATION_FIELD_FORMAT_EMAIL')),
        password: z.string().min(1, t('FORM_VALIDATION_FIELD_REQUIRED')),
    });

    const { handleSubmit, control, getValues } = useForm<IFormInputs>({
        defaultValues: { email: '', password: '' },
        resolver: zodResolver(schema),
        mode: 'onChange',
    });

    const onLogin = (): void => {
        const { email, password } = getValues();
        console.log('=========>', email);
        console.log('=========>', password);
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    };

    return {
        control,
        onLogin,
        handleSubmit,
    };
};

export default LoginViewModel;
