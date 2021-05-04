import React from 'react';
import PropTypes from 'prop-types';

class GenericTextInput extends React.Component {
  render() {
    const { text, type, name, test, value, handleChange } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${test}-input-label` }>
        { text }
        <input
          type={ type }
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

GenericTextInput.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default GenericTextInput;
