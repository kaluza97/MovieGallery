import { useEffect, useState } from "react"
import { Grid, Box } from 'theme-ui'

export const MoviesContainer = () => {

    const API_URL = 'https://api.themoviedb.org/3/movie/550/lists?api_key=2c59dada9ddb5e06e58b8fc3623ee3d5';
    const [moviesList, setMovieList] = useState<string[]>([])

    useEffect(() => {
        fetch(API_URL).then(res => res.json()).then(data => {
            setMovieList(data.results);
        })
    }, [moviesList]);

    return (
        <Grid gap={10} columns={[2, '1fr 1fr']}>
            {console.log(moviesList)};
        </Grid>)
}

export default MoviesContainer;
