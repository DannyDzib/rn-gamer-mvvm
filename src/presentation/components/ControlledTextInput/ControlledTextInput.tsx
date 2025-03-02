import { useState, type ReactElement } from 'react';
import {
    TextInput,
    View,
    Image,
    Text,
    type KeyboardType,
    type ImageSourcePropType,
    TouchableOpacity,
} from 'react-native';
import { MyColors } from '@presentation/theme/AppTheme';
import styles from './Styles';
import {
    Controller,
    type Control,
    type FieldValues,
    type Path,
} from 'react-hook-form';
import LookPassIcon from '@assets/img/look_pass.png';

interface Props<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    placeholder?: string;
    image?: ImageSourcePropType;
    keyboardType?: KeyboardType;
    secureTextEntry?: boolean;
    rules?: Record<string, unknown>;
}

const ControlledTextInput = <T extends FieldValues>({
    control,
    name,
    placeholder = '',
    image,
    keyboardType = 'default',
    secureTextEntry = false,
    rules = {},
}: Props<T>): ReactElement => {
    const [isPasswordVisible, setPasswordVisible] = useState(secureTextEntry);

    const togglePasswordVisibility = (): void => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
            }) => (
                <View style={styles.containerInput}>
                    <Image source={image} style={styles.image} />
                    <View style={styles.inputContent}>
                        <View style={styles.textInput}>
                            <TextInput
                                placeholder={placeholder}
                                value={value}
                                keyboardType={keyboardType}
                                style={styles.input}
                                secureTextEntry={isPasswordVisible}
                                placeholderTextColor={MyColors.placeholder}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={onChange}
                            />
                            {secureTextEntry && (
                                <TouchableOpacity
                                    disabled={value?.length === 0}
                                    onPress={togglePasswordVisibility}
                                >
                                    <Image
                                        source={LookPassIcon}
                                        style={styles.lookPassIcon}
                                    />
                                </TouchableOpacity>
                            )}
                        </View>
                        {error?.message != null && (
                            <Text style={styles.textError}>{error?.message}</Text>
                        )}
                    </View>
                </View>
            )}
        />
    );
};

export default ControlledTextInput;
