import React from 'react';
import PropTypes from 'prop-types';

class ItemCardRevisar extends React.Component {
  render() {
    const { id, title, price, quantidade, thumbnail } = this.props.item;
    return (
      <div key={id}>
        <img src={thumbnail} alt="Produto" />
        <div>{title}</div>
        <div>Total: R${quantidade * price}</div>
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
