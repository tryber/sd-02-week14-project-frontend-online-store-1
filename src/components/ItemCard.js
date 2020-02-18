import React from 'react';
import '../components/ItemCard.css';
import PropTypes from 'prop-types';

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: [],
    };
  }
  render() {
    const { title, price, available_quantity, thumbnail } = this.props.item;
    return (
      <div className="centralizado">
        <div>Nome do Produto: {title}</div>
        <img src={thumbnail} alt="Produto" />
        <p>Preço: R$ {price}</p>
        <p>Quantidade: {available_quantity} un.</p>
      </div>
    );
  }
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    available_quantity: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired
};

export default ItemCard;
