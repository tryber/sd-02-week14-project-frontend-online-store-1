import React from 'react';
class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          userEmail: '',
          review: '',
        };
        this.review = this.review.bind(this);
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
      <button className="reviewButton">Avaliar</button>
    </div>
  );
}

handleChange = (event) => {
  const { value, name } = event.target;
  this.setState( () => {
    this.setState({ [name]: value })
  });
}

  render() {
    return (
      <div>
      {this.review()}
      </div>
      );
  }
  }


export default Reviews;
