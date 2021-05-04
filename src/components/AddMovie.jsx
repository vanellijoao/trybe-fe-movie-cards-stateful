import React from 'react';

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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form" action="">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input type="text" name="title" id="title" data-testid="title-input" value={ title } onChange={ this.handleChange } />
          </label>

          <label htmlFor="title" data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" name="subtitle" id="subtitle" data-testid="subtitle-input" value={ subtitle } onChange={ this.handleChange } />
          </label>

          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input type="text" name="imagePath" id="imagePath" data-testid="image-input" value={ imagePath } onChange={ this.handleChange } />
          </label>

          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea name="storyline" id="storyline" cols="30" rows="10" data-testid="storyline-input" value={ storyline } onChange={ this.handleChange } />
          </label>

          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input type="number" name="rating" id="rating" data-testid="rating-input" value={ rating } onChange={ this.handleChange } />
          </label>

          <label htmlFor="genre" data-testid="genre-input-label">
            <select name="genre" id="genre" data-testid="genre-input" value={ genre } onChange={ this.handleChange }>
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button type="submit" data-testid="send-button" onClick={ onClick }>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func,
// }.isRequired;

export default AddMovie;// implement AddMovie component here
