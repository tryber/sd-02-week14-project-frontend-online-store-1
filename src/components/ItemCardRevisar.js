import React from 'react';
import PropTypes from 'prop-types';
import './ItemCardRevisar.css';

class ItemCardRevisar extends React.Component {
  render() {
    const {
      id, title, price, quantidade, thumbnail,
    } = this.props.item;
    return (
      <div key={id} className="container-item-revisar">
        <img src={thumbnail} alt="Produto" className="imagem-revisar" />
        <div className="container-infos-gerais">
          <div>{title}</div>
          <div>
            R$
            {(quantidade * price).toFixed(2)}
          </div>
        </div>
      </div>
    );
  }
}

ItemCardRevisar.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
    quantidade: PropTypes.number,
  }).isRequired,
};

export default ItemCardRevisar;
