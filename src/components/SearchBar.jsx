import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form" action="">
          <label htmlFor="movie-name" data-testid="text-input-label">
            <input
              id="movie-name"
              data-testid="text-input"
              type="text"
              value={ searchText }
            />
          </label>
          <input type="checkbox" name="" id="" />
          <select name="" id="">a</select>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  // onSearchTextChange: PropTypes.func,
  // bookmarkedOnly: PropTypes.boolean,
  // onBookmarkedChange: PropTypes.func,
  // selectedGenre: PropTypes.string,
  // onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
