import React from 'react';
import PropTypes from 'prop-types';
import './addBtn.css';

export default class AddToCartBtn extends React.Component {
  addItemToLocalStorage(event) {
    const {
      selectStyle, result, result: { id }, handleClick,
    } = this.props;
    selectStyle();
    if (!Object.keys(localStorage).includes(id)) {
      localStorage.setItem(id, JSON.stringify(result));
      localStorage.setItem(`${id}_quantity`, 1);
      handleClick(event);
    } else {
      let productQuantity = parseInt(localStorage.getItem(`${id}_quantity`), 10);
      productQuantity += 1;
      if (productQuantity < result.available_quantity) {
        localStorage.removeItem(`${id}_quantity`);
        localStorage.setItem(`${id}_quantity`, productQuantity);
        handleClick(event);
      } else {
        alert('A quantidade máxima deste produto foi excedida!');
      }
    }
  }

  render() {
    return (
      <button
        className="addBtn"
        type="button"
        onClick={(e) => this.addItemToLocalStorage(e)}
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddToCartBtn.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  selectStyle: PropTypes.func.isRequired,
};
