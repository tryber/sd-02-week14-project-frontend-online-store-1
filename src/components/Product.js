import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Product.css';
import BackArrow from '../imgs/back-arrow.png';
import Cart from '../imgs/img_290616.png';
import AddEmExibDetalhada from './AddEmExibDetalhada';
import Reviews from './Reviews';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  geraProduto() {
    const {
      title,
      price,
      thumbnail,
      attributes,
    } = this.props.location.state.item;
    return (
      <div className="productContainer">
        <div className="titulo">
          {title}
          {' '}
          - R$
          {price}
        </div>
        <div className="display">
          <img src={thumbnail} className="productImage" alt="Imagem do produto clicado" />
          <div className="especificacoesTecnicas">
            <p>Especificações Técnicas</p>
            {attributes.map((atributos) => (
              <li key={atributos.name}>
                {atributos.name}
                :
                {' '}
                {atributos.value_name}
              </li>
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
        <AddEmExibDetalhada enviaAoCarro={this.props.location.state.item} />
        <Reviews />
      </div>
    );
  }
}

Product.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        attributes: PropTypes.shape({
          name: PropTypes.string,
          value_name: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default Product;
