import { type FC } from 'react';
import { type StackScreenProps } from '@react-navigation/stack';
import { type TabParamList } from '@presentation/types/TabsTypes';
import { Text } from 'react-native';

interface Props extends StackScreenProps<TabParamList, 'MyPostListScreen'> {}

const MyPostList: FC<Props> = () => {
    // eslint-disable-next-line react-native/no-raw-text
    return <Text>MyPostList</Text>;
};

export default MyPostList;
