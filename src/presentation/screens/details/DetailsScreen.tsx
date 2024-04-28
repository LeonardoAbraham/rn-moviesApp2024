import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';
//import { useRoute } from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
    const { movieId } = route.params;
    //const { movieId } = useRoute().params;

    const { isLoading, movie, cast = [] } = useMovie(movieId);

    if (isLoading) {
        return <FullScreenLoader />;;
    }

    return (
        <ScrollView>
            {/* Header */}
            <MovieHeader
                originalTitle={movie?.originalTitle ?? ''}
                title={movie?.title ?? ''}
                poster={movie?.poster ?? ''}
            />

            {/* Details */}
            {/* eslint-disable-next-line prettier/prettier */}
            <MovieDetails movie={movie!} cast={cast}/>
        </ScrollView>
    );
};
