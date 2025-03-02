import Toast, { type BaseToastProps } from 'react-native-toast-message';
import CustomBaseToast from './CustomBaseToast';

const CustomToast = () => {
    const toastConfig = {
        success: (props: BaseToastProps) => (
            <CustomBaseToast properties={props} type="success" />
        ),
        error: (props: BaseToastProps) => (
            <CustomBaseToast properties={props} type="error" />
        ),
    };
    return <Toast config={toastConfig} />;
};

export default CustomToast;
