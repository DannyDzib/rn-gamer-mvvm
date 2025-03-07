import { useNavigation as useReactNavigation } from '@react-navigation/native';
import { type StackNavigationProp } from '@react-navigation/stack';
import { type RootStackParamList } from '@presentation/navigation/MainStackNavigator';

export const useNavigation = (): StackNavigationProp<RootStackParamList> => {
    return useReactNavigation();
};
