import React from 'react';
import PropTypes from 'prop-types';

class AddTextarea extends React.Component {
  render() {
    const { text, name, test, value, handleChange } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${test}-input-label` }>
        { text }
        <textarea
          name={ name }
          id={ name }
          data-testid={ `${test}-input` }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddTextarea.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  test: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default AddTextarea;
