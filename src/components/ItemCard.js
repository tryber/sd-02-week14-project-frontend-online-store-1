import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemListAdd from './ItemListAdd';
import './ItemCard.css';

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: [],
    };
  }

  render() {
    const { id, title, price, available_quantity: vQuantity, thumbnail,
    } = this.props.item;
    const { modificaIconeCarrinho } = this.props;
    return (
      <div className="container-cards">
        <Link
          to={{
            pathname: `product/${id}`,
            state: { item: this.props.item },
          }}
        >
          <div>
            <div className="titulo-card"> Nome do Produto: {title} </div>
            <img src={thumbnail} alt="Produto" />
            <p>
              Preço: R${price}
            </p>
            <p>
              Quantidade:
              {vQuantity}
              {' '}
              un.
            </p>
          </div>
        </Link>
        <ItemListAdd produto={this.props.item} modificaIconeCarrinho={modificaIconeCarrinho} />
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
    id: PropTypes.string,
  }).isRequired,
  modificaIconeCarrinho: PropTypes.func.isRequired,
};

export default ItemCard;
