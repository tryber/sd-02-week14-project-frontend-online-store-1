import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import BackArrow from '../imgs/back-arrow.png';
import Cart from '../imgs/img_290616.png';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  geraProduto() {
    const { title, price, thumbnail, attributes } = this.props.location.state.item;
    return (
    <div className="productContainer">
    <div className="titulo">{title} - R${price}</div>
    <div className="display">
    <img src={thumbnail} className="productImage" alt="Imagem do produto clicado" />
    <div className="especificacoesTecnicas">
    <p>Especificações Técnicas</p>
      {attributes.map((atributos) => (
    <li key={atributos.name}>{atributos.name}: {atributos.value_name}</li>
    ))}
    </div>
    </div>
    </div>
  );
  }

  render() {
    return (
    <div className="body">
      <div className="icons">
      <Link to="/">
      <img src={BackArrow} alt="Seta para voltar à página anterior" className="seta" />
      </Link>
      <Link to="/shopping-cart">
      <img src={Cart} alt="Carrinho de compras" className="carrinho" />
    </Link>
    </div>
      {this.geraProduto(this.props.location.state)}
    </div>
    );
  }
}

export default Product;
