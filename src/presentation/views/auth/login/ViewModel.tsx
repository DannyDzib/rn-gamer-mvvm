import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

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

    const { handleSubmit, control } = useForm<IFormInputs>({
        defaultValues: { email: '', password: '' },
        resolver: zodResolver(schema),
        mode: 'onChange',
    });

    const onLogin = (): void => {
        console.log('Desde el submit');
    };

    return {
        control,
        onLogin,
        handleSubmit,
    };
};

export default LoginViewModel;
