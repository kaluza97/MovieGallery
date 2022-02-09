import { Grid } from 'theme-ui';
import { favoriteMoviesSelector } from '../../recoil/stateElements';
import { useRecoilValue } from 'recoil';

export const FavoriteMovies = () => {

    const moviesList = useRecoilValue(favoriteMoviesSelector);


    const movies = moviesList.map((movie: any) => {
        return (
            <ul key={movie.id}>
                <li>{movie.name}</li>
                <li>{movie.favorite_count}</li>
            </ul>
        )
    })

    return (
        <Grid gap={10} columns={[2, '1fr 1fr']}>
            <p style={{ marginBottom: '5rem' }}>ULUBIONE FILMY</p>
            {movies}
        </Grid >)
}

export default FavoriteMovies;
