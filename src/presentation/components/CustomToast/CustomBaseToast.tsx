import { BaseToast, type BaseToastProps } from 'react-native-toast-message';
import { View } from 'react-native';
import sx from './Styles';

interface Props {
    properties: BaseToastProps;
    type: 'success' | 'error';
}

const CustomBaseToast = ({ properties, type }: Props) => {
    const circleStyle = {
        success: sx.success,
        error: sx.err,
    };

    return (
        <BaseToast
            {...properties}
            style={sx.style}
            contentContainerStyle={sx.container}
            text1Style={sx.firsText}
            text2Style={sx.secondText}
            renderLeadingIcon={() => <View style={circleStyle[type]} />}
        />
    );
};

export default CustomBaseToast;
