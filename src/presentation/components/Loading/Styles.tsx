import { MyColors } from '@src/presentation/theme/AppTheme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MyColors.backgroundBlack,
        opacity: 0.5,
    },
});

export default styles;
