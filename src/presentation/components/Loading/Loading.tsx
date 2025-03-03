import { ActivityIndicator, View } from 'react-native';
import { MyColors } from '@presentation/theme/AppTheme';
import styles from './Styles';

const Loading = ({ loading }: { loading: boolean }) => {
    if (!loading) return null;
    return (
        <View style={styles.overlay}>
            <ActivityIndicator size="large" color={MyColors.primary} />
        </View>
    );
};

export default Loading;
