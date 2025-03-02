import React, { type FC, type ReactElement } from 'react';
import { ScrollView, View } from 'react-native';
import { type StackScreenProps } from '@react-navigation/stack';
import { type RootStackParamList } from '@src/presentation/navigation/MainStackNavigator';
import ControlledTextInput from '@src/presentation/components/ControlledTextInput';
import DefaultButton from '@src/presentation/components/DefaultButton/DefaultButton';
import DI from '@src/di/ioc';
import FormBanner from './components/FormBanner';
import UserIcon from '@assets/img/user_image.png';
import EmailIcon from '@assets/img/email.png';
import PasswordIcon from '@assets/img/password.png';
import { useTranslation } from 'react-i18next';
import styles from './Styles';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> {}

const Register: FC<Props> = ({ navigation }: Props): ReactElement => {
    const { t } = useTranslation('register');
    const { control, handleSubmit } = DI.resolve('RegisterViewModel');

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <FormBanner
                    title={t('FORM_BANNER_TITLE')}
                    goBack={() => {
                        navigation.pop();
                    }}
                />
                <View style={styles.formContainer}>
                    <ControlledTextInput
                        name="userName"
                        control={control}
                        placeholder={t('FORM_PLACEHOLDER_USER_NAME')}
                        image={UserIcon}
                    />
                    <ControlledTextInput
                        name="email"
                        control={control}
                        placeholder={t('FORM_PLACEHOLDER_EMAIL')}
                        image={EmailIcon}
                    />
                    <ControlledTextInput
                        name="password"
                        control={control}
                        placeholder={t('FORM_PLACEHOLDER_PASSWORD')}
                        image={PasswordIcon}
                        secureTextEntry
                    />
                    <ControlledTextInput
                        name="confirmPassword"
                        control={control}
                        placeholder={t('FORM_PLACEHOLDER_CONFIRM_PASSWORD')}
                        image={PasswordIcon}
                        secureTextEntry
                    />
                </View>
                <DefaultButton
                    text={t('FORM_BUTTON_REGISTER')}
                    onPress={handleSubmit}
                />
            </View>
        </ScrollView>
    );
};

export default Register;
