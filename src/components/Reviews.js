import React from 'react';
import './Reviews.css';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    const teste = JSON.parse(localStorage.getItem('Comentários'));
    this.state = {
      userEmail: '',
      review: '',
      result: teste || [{
        userEmailSubmit: '',
        reviewSubmit: '',
     }],
    };
    this.review = this.review.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  generateReview() {
  const { result } = this.state;
  return (
  <div>
    {result.map((resultado) => (
      <div>
        <p><strong>{ resultado.userEmailSubmit }</strong></p>
        <p>{ resultado.reviewSubmit } </p>
    </div>
    ))}
  </div>
  );
}

  handleFormSubmit() {
  this.setState((state) => ({
    result: [...state.result, { userEmailSubmit: state.userEmail, reviewSubmit: state.review, }]
  }));
};

  componentDidMount() {
  let { result } = this.state;
  result = JSON.parse(localStorage.getItem('Comentários'));
  this.setState({ result });
}

  review() {
  return (
    <div className="reviewBox">
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          className="userEmail"
          name="userEmail"
          placeholder="E-mail"
          value={this.state.userEmail}
          onChange={this.handleChange}
        />
        <textarea
          type="text"
          className="review"
          name="review"
          placeholder="Mensagem (opcional)"
          value={this.state.review}
          maxLength="1000"
          onChange={this.handleChange}
        />
      </form>
      <button type="submit" className="reviewButton" onClick={this.handleFormSubmit}>Avaliar</button>
    </div>
  );
}

handleChange(event) {
  const { value, name } = event.target;
  this.setState(() => {
    this.setState({ [name]: value });
  });
}

  render() {
    const { result } = this.state;
    localStorage.setItem('Comentários', JSON.stringify(result));
    return (
      <div>
      {this.review()}
      {this.generateReview()}
      </div>
      );
  }
  }

export default Reviews;
