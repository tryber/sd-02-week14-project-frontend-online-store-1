import React from 'react';
import PropTypes from 'prop-types';
import '../components/ItemCard.css';

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: [],
    };
  }
  render() {
    const { title, price, available_quantity: vQuantity, thumbnail } = this.props.item;
    return (
      <div className="centralizado">
        <div>Nome do Produto: {title}</div>
        <img src={thumbnail} alt="Produto" />
        <p>Preço: R$ {price}</p>
        <p>Quantidade: {vQuantity} un.</p>
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
  }).isRequired,
};

export default ItemCard;
