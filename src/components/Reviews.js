import React from 'react';
import './Reviews.css';


class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          userEmail: '',
          review: '',
          result: [{
            userEmailSubmit: '',
            reviewSubmit: '',
          }],
        };
        this.review = this.review.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
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

handleChange = (event) => {
  const { value, name } = event.target;
  this.setState( () => {
    this.setState({ [name]: value })
  });
}

generateReview(){
  const { result } = this.state;
  return (
  <div>
    {result.map((resultado) => (
      <div>
      <p>{ resultado.userEmailSubmit } </p>
      <p>{ resultado.reviewSubmit } </p>
    </div>
    ))}
  </div>
  );
}

handleFormSubmit = () => {
  const { userEmail, review } = this.state;
  this.setState((state) => ({
    result: [...state.result, { userEmailSubmit: state.userEmail, reviewSubmit: state.review, }]
  }));
  localStorage.setItem('E-mail', userEmail);
  localStorage.setItem('Avaliação', review);
};

  render() {
    return (
      <div>
      {this.review()}
      {this.generateReview()}
      </div>
      );
  }
  }

export default Reviews;
