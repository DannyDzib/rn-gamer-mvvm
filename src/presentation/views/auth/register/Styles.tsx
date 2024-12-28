import { StyleSheet } from 'react-native';
import { MyColors } from '@presentation/theme/AppTheme';

const RegisterStyles = StyleSheet.create({
    scrollView: { flexGrow: 1 },
    container: {
        flex: 1,
        backgroundColor: MyColors.background,
    },
    svgContainer: {
        backgroundColor: MyColors.primary,
        height: 235,
        paddingTop: 50,
    },
    svg: {
        position: 'absolute',
        top: 178,
    },
    formContainer: {
        flex: 1,
        paddingTop: 45,
        justifyContent: 'space-around',
    },
    title: {
        width: 145,
        fontSize: 25,
        marginLeft: 55,
        color: MyColors.background,
    },
    image: {
        height: 130,
        width: 130,
        transform: [{ rotate: '35deg' }],
        alignSelf: 'flex-end',
    },
    goBackIconContent: {
        position: 'absolute',
        top: 65,
        left: 15,
    },
    goBackIcon: {
        width: 30,
        height: 30,
    },
});

export default RegisterStyles;
