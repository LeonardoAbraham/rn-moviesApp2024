import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'b0908c88f962bd20a351fe7fbe37df30',
        language: 'es',
    },
});
