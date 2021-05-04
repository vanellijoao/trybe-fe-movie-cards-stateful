import React from 'react';
import PropTypes from 'prop-types';

import AddInputs from './AddInputs';
import AddTextarea from './AddTextarea';
import AddSelect from './AddSelect';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetStates =() => {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  submitAndAdd(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form" action="">
          <AddInputs
            title={ title }
            subtitle={ subtitle }
            imagePath={ imagePath }
            rating={ rating }
            handleChange={ this.handleChange }
          />

          <AddTextarea
            text="Sinopse"
            name="storyline"
            test="storyline"
            value={ storyline }
            handleChange={ this.handleChange }
          />

          <AddSelect
            text="Gênero"
            name="genre"
            test="genre"
            value={ genre }
            handleChange={ this.handleChange }
          />

          <button
            type="submit"
            data-testid="send-button"
            onClick={ (event) => {
              this.submitAndAdd(event);
              this.resetStates();
            } }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;// implement AddMovie component here
