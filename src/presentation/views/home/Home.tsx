import { ScrollView, View } from 'react-native';
import { type StackScreenProps } from '@react-navigation/stack';
import { type AppStackParamList } from '@presentation/navigation/stacks/AppStackNavigator';
import DefaultButton from '@presentation/components/DefaultButton';
import DI from '@src/di/ioc';
import styles from './Styles';

interface Props extends StackScreenProps<AppStackParamList, 'HomeScreen'> {}

const Home = ({ navigation, route }: Props) => {
    const { onLogout } = DI.resolve('HomeViewModel');
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <DefaultButton text="Cerrar sesion" onPress={onLogout} />
            </View>
        </ScrollView>
    );
};

export default Home;
