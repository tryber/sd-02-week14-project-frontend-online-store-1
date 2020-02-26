import React from 'react';
import Rating from 'react-rating';
import goldenStar from '../imgs/goldenstar.png';
import grayStar from '../imgs/graystar.png';
import './Reviews.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    const teste = JSON.parse(localStorage.getItem('Comentários'));
    this.state = {
      rating: 1,
      userEmail: '',
      review: '',
      result: teste || [{
        userEmailSubmit: '',
        reviewSubmit: '',
      }],
    };
    this.reviewRenderized = this.reviewRenderized.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeRate = this.changeRate.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState(() => {
      this.setState({ [name]: value });
    });
  }

  changeRate(rate) {
    this.setState({ rating: rate });
  }

  handleFormSubmit() {
    this.setState((state) => ({
      result: [...state.result, { userEmailSubmit: state.userEmail, reviewSubmit: state.review }],
    }));
  }

  emailInput() {
    return (
      <input
        type="text"
        className="userEmail"
        name="userEmail"
        placeholder="E-mail"
        value={this.state.userEmail}
        onChange={this.handleChange}
      />
    );
  }

  commentInput() {
    return (
      <textarea
        type="text"
        className="review"
        name="review"
        placeholder="Mensagem (opcional)"
        value={this.state.review}
        maxLength="1000"
        onChange={this.handleChange}
      />
    );
  }

  writeReview() {
    const { rating } = this.state;
    return (
      <div className="reviewBox">
        <form onSubmit={this.handleFormSubmit}>
          <div className="starRating">
            {this.emailInput()}
            <Rating
              initialRating={rating}
              onChange={(rate) => this.changeRate(rate)}
              emptySymbol={<img src={grayStar} className="starIcon" alt="gray star" />}
              fullSymbol={<img src={goldenStar} className="starIcon" alt="golden star" />}
            />
          </div>
          {this.commentInput()}
        </form>
        <button type="submit" className="reviewButton" onClick={this.handleFormSubmit}>
          Avaliar
        </button>
      </div>
    );
  }

  reviewRenderized() {
    const { rating, result } = this.state;
    return (
      <div>
        {result.map((resultado) => (
          <div>
            <p>
              <strong>
                {resultado.userEmailSubmit}
              </strong>
              <Rating
                readonly
                initialRating={rating}
                emptySymbol={<img src={grayStar} className="starIcon" alt="gray star" />}
                fullSymbol={<img src={goldenStar} className="starIcon" alt="golden star" />}
              />
            </p>
            <p>
              {resultado.reviewSubmit}
            </p>
          </div>
        ))}
      </div>
    );
  }


  render() {
    const { result } = this.state;
    localStorage.setItem('Comentários', JSON.stringify(result));
    return (
      <div>
        {this.writeReview()}
        {this.reviewRenderized()}
      </div>
    );
  }
}

export default Reviews;
