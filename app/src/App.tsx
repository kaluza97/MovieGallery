import React from 'react';
import './App.css';
import Header from './components/header/header';
import MoviesContainer from './components/moviesContainer/MoviesContainer';
import FavoriteMovies from './components/favoriteMovies/FavoriteMovies';
import { Spinner } from 'theme-ui';

function App() {
  return (
    <div className="App">
      <Header />
      <React.Suspense fallback={<Spinner />}>
        <MoviesContainer />
        <FavoriteMovies />
      </React.Suspense>

    </div>
  );
}

export default App;
