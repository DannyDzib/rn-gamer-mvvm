import { StyleSheet } from 'react-native';
import { MyColors } from '@presentation/theme/AppTheme';

const styles = StyleSheet.create({
    scrollView: { flexGrow: 1 },
    container: {
        flex: 1,
        backgroundColor: MyColors.background,
    },
    btn: {
        fontSize: 16,
        width: 100,
        textAlign: 'center',
        marginBottom: 50,
        color: MyColors.primary,
    },
});

export default styles;
