import { atom , selector} from "recoil"
import { API_KEY } from "../endpoints";

export const moviesState = atom({
    key: 'moviesState',
    default: [],
  });

  export const moviesListSelector = selector({
    key: 'moviesListSelector',
    get: async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/550/lists?api_key=${API_KEY}`)
        const data = await response.json();
        return data.results;
    }
});

export const favoriteMoviesSelector = selector({
  key: 'favoriteMoviesSelector',
  get: ({get}) => get(moviesListSelector).filter(({name}) => name.includes('W'))
});