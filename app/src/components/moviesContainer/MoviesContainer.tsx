import { useState } from 'react';
import { Grid } from 'theme-ui';
import { moviesListSelector } from '../../recoil/stateElements';
import { useRecoilValue } from 'recoil';

export const MoviesContainer = () => {

    const [favoriteMovie, setFavoriteMovie] = useState(0);
    const moviesList = useRecoilValue(moviesListSelector);

    console.log(moviesList);

    const movies = moviesList.map((movie: any) => {
        return (
            <ul key={movie.id}>
                <li>{movie.name}</li>
                <li>{movie.favorite_count}</li>
                <button onClick={() => setFavoriteMovie(movie.favorite_count + 1)}>dodaj do ulubionych</button>
            </ul>
        )
    })

    return (
        <Grid gap={10} columns={[2, '1fr 1fr']}>
            {movies}
        </Grid >)
}

export default MoviesContainer;
