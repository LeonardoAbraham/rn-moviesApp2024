import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
//import { useRoute } from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
    const { movieId } = route.params;
    //const { movieId } = useRoute().params;

    console.log(movieId);

    return (
        <View>
            <Text>DetailsScreen</Text>
        </View>
    );
};
