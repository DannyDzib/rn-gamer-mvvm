import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface IFormInputs {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
const RegisterViewModel = (): unknown => {
    const { t } = useTranslation('common');

    const schema = z
        .object({
            userName: z.string().min(4, t('FORM_VALIDATION_FIELD_REQUIRED')),
            email: z
                .string()
                .min(4, t('FORM_VALIDATION_FIELD_REQUIRED'))
                .email(t('FORM_VALIDATION_FIELD_FORMAT_EMAIL')),
            password: z.string().min(1, t('FORM_VALIDATION_FIELD_REQUIRED')),
            confirmPassword: z
                .string()
                .min(1, t('FORM_VALIDATION_FIELD_REQUIRED')),
        })
        .refine(data => data.password === data.confirmPassword, {
            message: t('FORM_VALIDATION_FIELD_PASSWORDS_DO_NOT_MATCH'),
            path: ['confirmPassword'], // where is the error
        });

    /* const defaultValues = {
        userName: 'jonh doe',
        email: 'jonh@doe.com',
        password: 'qwerty1234',
        confirmPassword: 'qwerty1234',
    }; */
    const defaultValuesEmpty = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const { handleSubmit, control } = useForm<IFormInputs>({
        defaultValues: defaultValuesEmpty,
        resolver: zodResolver(schema),
        mode: 'onChange',
    });

    const onRegister = (): void => {
        console.log('El formulario es valido');
    };

    return {
        control,
        handleSubmit,
        onRegister,
    };
};

export default RegisterViewModel;
