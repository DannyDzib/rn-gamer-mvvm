import { StyleSheet } from 'react-native';
import { MyColors } from '@src/presentation/theme/AppTheme';

const styles = StyleSheet.create({
    style: {
        borderLeftColor: MyColors.backgroundLight,
        backgroundColor: MyColors.backgroundLight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: { paddingHorizontal: 15 },
    firsText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: MyColors.primaryText,
    },
    secondText: {
        fontSize: 14,
        fontWeight: '400',
        color: MyColors.primaryText,
    },
    success: {
        width: 25,
        height: 25,
        borderRadius: 15,
        backgroundColor: MyColors.success,
        marginLeft: 10,
    },
    err: {
        width: 25,
        height: 25,
        borderRadius: 15,
        backgroundColor: MyColors.error,
        marginLeft: 10,
    },
});
export default styles;
