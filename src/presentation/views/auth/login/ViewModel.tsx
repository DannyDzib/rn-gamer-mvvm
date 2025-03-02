import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { type ILoginUseCase } from '@application/useCases/auth/types';
import { z } from 'zod';
import toast from 'react-native-toast-message';

interface IFormInputs {
    email: string;
    password: string;
}

interface Props {
    LoginUseCase: ILoginUseCase;
}

const LoginViewModel = ({ LoginUseCase }: Props) => {
    const { t } = useTranslation('common');
    const schema = z.object({
        email: z
            .string()
            .min(1, t('FORM_VALIDATION_FIELD_REQUIRED'))
            .email(t('FORM_VALIDATION_FIELD_FORMAT_EMAIL')),
        password: z.string().min(1, t('FORM_VALIDATION_FIELD_REQUIRED')),
    });

    const { handleSubmit, control, getValues } = useForm<IFormInputs>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(schema),
        mode: 'onBlur',
    });

    const onLogin = async (): Promise<void> => {
        const { email, password } = getValues();
        const data = await LoginUseCase.run(email, password);

        const isSuccess = !data?.error;
        const toastConfig = {
            type: isSuccess ? 'success' : 'error',
            text1: isSuccess
                ? t('LOGIN_SUCCESS_TITLE_TEXT')
                : t('LOGIN_ERR_TITLE_TEXT'),
            text2: isSuccess
                ? t('LOGIN_SUCCESS_SUBTITLE_TEXT')
                : t('LOGIN_ERR_SUBTITLE_TEXT'),
        };
        toast.show(toastConfig);
    };

    return {
        control,
        handleSubmit: handleSubmit(onLogin),
    };
};

export default LoginViewModel;
