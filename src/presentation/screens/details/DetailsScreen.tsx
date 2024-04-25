import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
//import { useRoute } from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
    const { movieId } = route.params;
    //const { movieId } = useRoute().params;

    const { isLoading, movie } = useMovie(movieId);

    if (isLoading) {
        return <Text>Loading</Text>;
    }

    return (
        <View>
            {/* Header */}
            <MovieHeader
                originalTitle={movie?.originalTitle ?? ''}
                title={movie?.title ?? ''}
                poster={movie?.poster ?? ''}
            />

            {/* Details */}
        </View>
    );
};
