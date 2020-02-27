import React from 'react';
import PropTypes from 'prop-types';

class ItemListAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: [],
    };
    this.clicar = this.clicar.bind(this);
  }

  clicar(func) {
    const { id } = this.props.produto;
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify({ [id]: { ...this.props.produto, quantidade: 1 } }));
    } else {
      const objProdutos = JSON.parse(localStorage.getItem('products'));
      if (objProdutos[id]) {
        objProdutos[id].quantidade += 1;
        localStorage.setItem('products', JSON.stringify(objProdutos));
      } else {
        localStorage.setItem('products', JSON.stringify({ ...objProdutos, [id]: { ...this.props.produto, quantidade: 1 } }));
      }
    }
    func();
  }

  render() {
    const { modificaIconeCarrinho } = this.props;
    return (
      <button onClick={() => this.clicar(modificaIconeCarrinho)}>Adicionar ao carrinho</button>
    );
  }
}

ItemListAdd.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  modificaIconeCarrinho: PropTypes.func.isRequired,
};

export default ItemListAdd;
