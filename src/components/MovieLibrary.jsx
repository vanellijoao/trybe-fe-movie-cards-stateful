import React from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: "",
      movies: props.movies,
    };
  }

  // searchText fnc

  // bookmarkedOnly fnc

  render() {
    const { searchText, movies } = this.state;

    return (
      <div>
        <SearchBar searchText={ searchText } />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.Arrayof,
}.isRequired;

export default MovieLibrary;
