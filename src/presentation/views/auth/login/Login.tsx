import { type ReactElement } from 'react';
import { ScrollView, View } from 'react-native';
import DefaultButton from '@presentation/components/DefaultButton';
import { type RootStackParamList } from '@presentation/navigation/MainStackNavigator';
import { type StackScreenProps } from '@react-navigation/stack';
import styles from './Styles';
import EmailIcon from '@assets/img/email.png';
import PasswordIcon from '@assets/img/password.png';
import Banner from './components/Banner';
import DI from '@src/di/ioc';
import ControlledTextInput from '@src/presentation/components/ControlledTextInput';
import { useTranslation } from 'react-i18next';
import MyButton from '@src/presentation/components/MyButton';

interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> {}

const Login = ({ navigation }: Props): ReactElement => {
    const { t } = useTranslation('login');

    const { control, handleSubmit } = DI.resolve('LoginViewModel');

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <Banner title={t('FORM_BANNER_TITLE')} />
                <View style={styles.formContainer}>
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
                </View>
                <DefaultButton
                    text={t('FORM_BUTTON_LOGIN')}
                    onPress={handleSubmit}
                />
                <MyButton
                    title={t('FORM_BUTTON_REGISTER').toUpperCase()}
                    titleStyle={styles.registerText}
                    onPress={() => {
                        navigation.navigate('RegisterScreen');
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default Login;
