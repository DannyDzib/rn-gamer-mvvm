import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { type IRegisterUseCase } from '@application/useCases/auth/types';
import toast from 'react-native-toast-message';

interface IFormInputs {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface Props {
    RegisterUseCase: IRegisterUseCase;
}
const RegisterViewModel = ({ RegisterUseCase }: Props) => {
    const { t } = useTranslation('common');

    const schema = z
        .object({
            userName: z.string().min(4, t('FORM_VALIDATION_FIELD_REQUIRED')),
            email: z
                .string()
                .min(4, t('FORM_VALIDATION_FIELD_REQUIRED'))
                .email(t('FORM_VALIDATION_FIELD_FORMAT_EMAIL')),
            password: z.string().min(1, t('FORM_VALIDATION_FIELD_REQUIRED')),
            confirmPassword: z.string().min(1, t('FORM_VALIDATION_FIELD_REQUIRED')),
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
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const { getValues, handleSubmit, control } = useForm<IFormInputs>({
        defaultValues: defaultValuesEmpty,
        resolver: zodResolver(schema),
        mode: 'onBlur',
    });

    const onRegister = async () => {
        const values = getValues();
        const data = await RegisterUseCase.run(values);

        const isSuccess = !data?.error;
        const toastConfig = {
            type: isSuccess ? 'success' : 'error',
            text1: isSuccess
                ? t('REGISTER_SUCCESS_TITLE_TEXT')
                : t('REGISTER_ERR_TITLE_TEXT'),
            text2: isSuccess
                ? t('REGISTER_SUCCESS_SUBTITLE_TEXT')
                : t('REGISTER_ERR_SUBTITLE_TEXT'),
        };
        toast.show(toastConfig);
    };

    return {
        control,
        handleSubmit: handleSubmit(onRegister),
    };
};

export default RegisterViewModel;
