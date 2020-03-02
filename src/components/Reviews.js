import React from 'react';
import Rating from 'react-rating';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import goldenStar from '../imgs/goldenstar.png';
import grayStar from '../imgs/graystar.png';
import './Reviews.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    const loadedResults = JSON.parse(localStorage.getItem(props.location.pathname));
    this.state = {
      rating: 5,
      userEmail: '',
      review: '',
      result: loadedResults || [],
    };
    this.renderReview = this.renderReview.bind(this);
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

  handleFormSubmit(event) {
    event.preventDefault();

    const {
      result,
      userEmail,
      review,
      rating,
    } = this.state;
    const { location } = this.props;

    const newResult = [
      ...result,
      {
        userEmailSubmit: userEmail,
        ratingSubmit: rating,
        reviewSubmit: review,
      },
    ];

    localStorage.setItem(location.pathname, JSON.stringify(newResult));

    this.setState({ result: newResult });
  }

  emailInput() {
    const { userEmail } = this.state;
    return (
      <input
        type="text"
        className="userEmail"
        name="userEmail"
        placeholder="E-mail"
        value={userEmail}
        onChange={this.handleChange}
        required
      />
    );
  }

  commentInput() {
    const { review } = this.state;
    return (
      <textarea
        type="text"
        className="review"
        name="review"
        placeholder="Mensagem (opcional)"
        value={review}
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
          <button type="submit" className="reviewButton">
            Avaliar
          </button>
        </form>
      </div>
    );
  }

  renderReview() {
    const { result } = this.state;
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
                initialRating={resultado.ratingSubmit}
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
    return (
      <div>
        {this.writeReview()}
        {this.renderReview()}
      </div>
    );
  }
}

Reviews.defaultProps = {
  location: {},
};

Reviews.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default withRouter(Reviews);
