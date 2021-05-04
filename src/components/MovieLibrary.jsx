import React from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.includeMovie = this.includeMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange = ({ target: { value } }) => {
    this.setState({ searchText: value });
    const { movies } = this.props;
    this.setState({
      movies: movies.filter((movie) => movie.title.includes(value)
      || movie.subtitle.includes(value)
      || movie.storyline.includes(value)),
    });
  }

  onBookmarkedChange = ({ target: { checked } }) => {
    this.setState({ bookmarkedOnly: checked });
    const { movies } = this.props;
    if (checked) {
      this.setState({
        movies: movies.filter((movie) => movie.bookmarked === true),
      });
    } else {
      this.setState({ movies });
    }
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({ selectedGenre: value });
    const { movies } = this.props;
    if (value === 'action') {
      this.setState({
        movies: movies.filter((movie) => movie.genre === 'action'),
      });
    } else if (value === 'comedy') {
      this.setState({
        movies: movies.filter((movie) => movie.genre === 'comedy'),
      });
    } else if (value === 'thriller') {
      this.setState({
        movies: movies.filter((movie) => movie.genre === 'thriller'),
      });
    } else {
      this.setState({ movies });
    }
  }

  includeMovie(newMovie) {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />

        <MovieList movies={ movies } />

        <AddMovie
          onClick={ (newMovie) => {
            this.includeMovie(newMovie);
          } }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.Arrayof,
}.isRequired;

export default MovieLibrary;
