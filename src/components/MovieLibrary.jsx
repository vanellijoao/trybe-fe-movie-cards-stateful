import React from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // searchText: "",
      // bookmarkedOnly: false,
      // selectedGenre: "",
      movies: props.movies,
    };
  }

  // searchText fnc

  // bookmarkedOnly fnc

  render() {
    const { movies } = this.state;

    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
