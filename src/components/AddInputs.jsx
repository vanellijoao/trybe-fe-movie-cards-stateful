import React from 'react';
import PropTypes from 'prop-types';

import GenericTextInput from './GenericTextInput';

class AddInputs extends React.Component {
  render() {
    const { title, subtitle, imagePath, rating, handleChange } = this.props;

    return (
      <div>
        <GenericTextInput
          text="Título"
          type="text"
          name="title"
          test="title"
          value={ title }
          handleChange={ handleChange }
        />
        <GenericTextInput
          text="Subtítulo"
          type="text"
          name="subtitle"
          test="subtitle"
          value={ subtitle }
          handleChange={ handleChange }
        />
        <GenericTextInput
          text="Imagem"
          type="text"
          name="imagePath"
          test="image"
          value={ imagePath }
          handleChange={ handleChange }
        />
        <GenericTextInput
          text="Avaliação"
          type="number"
          name="rating"
          test="rating"
          value={ rating }
          handleChange={ handleChange }
        />
      </div>
    );
  }
}

AddInputs.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default AddInputs;
