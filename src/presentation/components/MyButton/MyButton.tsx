import { type FC, type ReactNode } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    titleStyle?: object;
    buttonStyle?: object;
    disabled?: boolean;
    onPress?: () => void;
}

const MyButton: FC<Props> = ({
    onPress,
    title,
    titleStyle,
    disabled = false,
    buttonStyle,
}): ReactNode => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={buttonStyle}
            onPress={onPress}
        >
            <Text style={titleStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

export default MyButton;
