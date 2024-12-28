import { StyleSheet } from 'react-native';
import { MyColors } from '@src/presentation/theme/AppTheme';

const styles = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
    },
    inputContent: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 5,
        marginHorizontal: 30,
        marginTop: 20,
    },
    textInput: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: MyColors.secondary,
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: MyColors.secondary,
    },
    image: {
        height: 23.5,
        width: 24,
        marginLeft: 15,
        marginTop: 35,
    },
    lookPassIcon: {
        height: 22,
        width: 22,
    },
    textError: {
        marginTop: 5,
        color: MyColors.fieldError,
        fontWeight: 'bold',
    },
});

export default styles;
