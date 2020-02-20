import React from 'react';
import PropTypes from 'prop-types';

class CardShoppingCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const quantidade = localStorage.getItem(`${id}_quantity`);
    this.setState({ quantidade })
  }

  render() {
    const { id } = this.props;
    const { quantidade } = this.state
    const { title, thumbnail, price, available_quantity: vQuantity } = localStorage.getItem(id);
    return (
      <div>
        <p>{title}</p>
        <img src={thumbnail} />
        <p>{price}</p>
        <p>{vQuantity}</p>
        <p>{quantidade}</p>
        <p>Valor Total: {quantidade * price}</p>
      </div>
    )
  }
}

CardShoppingCar.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CardShoppingCar;