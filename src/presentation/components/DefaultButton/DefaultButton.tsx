import { type FC, type ReactElement } from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import ArrowRightIcon from '@assets/img/right-arrow.png';
import styles from './Styles';

interface Props {
    text: string;
    disabled?: boolean;
    onPress: () => void;
    image?: unknown;
}
const DefaultButton: FC<Props> = ({
    text,
    disabled = false,
    onPress,
    image,
}): ReactElement => {
    const icon = image ?? ArrowRightIcon;
    return (
        <TouchableOpacity
            disabled={disabled}
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.textButton}>{text}</Text>
            <Image source={icon} style={styles.buttonIcon} />
        </TouchableOpacity>
    );
};

export default DefaultButton;
