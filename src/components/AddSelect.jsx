import React from 'react';
import PropTypes from 'prop-types';

class AddSelect extends React.Component {
  render() {
    const { text, name, test, value, handleChange } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${test}-input-label` }>
        { text }
        <select
          name={ name }
          id={ name }
          data-testid={ `${test}-input` }
          value={ value }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

AddSelect.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AddSelect;
