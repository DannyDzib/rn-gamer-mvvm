import { type ReactElement } from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { MyColors } from '@presentation/theme/AppTheme';
import GameControlIcon from '@assets/img/game_con_black.png';
import styles from '../Styles';

interface Props {
    title: string;
}

const Banner = ({ title }: Props): ReactElement => {
    return (
        <View style={styles.svgContainer}>
            <Svg
                height={200}
                width={Dimensions.get('screen').width}
                viewBox="0 0 1440 320"
                style={styles.svg}
            >
                <Path
                    fill={MyColors.primary}
                    fill-opacity="1"
                    d="M0,32L60,74.7C120,117,240,203,360,197.3C480,192,600,96,720,74.7C840,53,960,107,1080,122.7C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                />
            </Svg>
            <Text style={styles.title}>{title}</Text>
            <Image source={GameControlIcon} style={styles.image} />
        </View>
    );
};

export default Banner;
