import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import PostList from '@presentation/views/post/list';
import MyPostList from '@presentation/views/post/myList';
import ProfileInfo from '@presentation/views/profile/info';
import ListIcon from '@assets/img/my_list.png';
import CheckIcon from '@assets/img/checklist.png';
import UserIcon from '@assets/img/user.png';
import { type TabParamList } from '@presentation/types/TabsTypes';
import style from './style';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: style.tabBarStyle,
                tabBarActiveTintColor: 'white',
            }}
        >
            <Tab.Screen
                name="PostListScreen"
                component={PostList}
                options={{
                    title: 'Post',
                    tabBarLabel: 'Post',
                    tabBarIcon: () => <Image source={ListIcon} style={style.icon} />,
                }}
            />
            <Tab.Screen
                name="MyPostListScreen"
                component={MyPostList}
                options={{
                    title: 'Mis post',
                    tabBarLabel: 'Mis post',
                    tabBarIcon: () => (
                        <Image source={CheckIcon} style={style.icon} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileInfoScreen"
                component={ProfileInfo}
                options={{
                    title: 'Perfil',
                    tabBarLabel: 'Perfil',
                    tabBarIcon: () => <Image source={UserIcon} style={style.icon} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
