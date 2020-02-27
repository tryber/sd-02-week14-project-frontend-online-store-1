import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Product.css';
import BackArrow from '../imgs/back-arrow.png';
import Cart from '../imgs/img_290616.png';
import Reviews from './Reviews'

class Product extends React.Component {
  constructor(props) {
    super(props);

    const { item } = this.props.location.state;
    const { quantity } = item;

    this.state = {
      attributes: [],
      productCount: quantity,
    };

    this.decreaseCount = this.decreaseCount.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  // componentDidMount() {
  //   const { item } = this.props.location.state;
  //   const { productInfo } = item;
  //   requisicaoItemAPI.pesquisarItem(productInfo.category, productInfo.item)
  //   .then((products) => products.results.find((x) => x.id === item.id))
  //   .then((response) => response.attributes.map((element) =>
  //   this.setState((state) =>
  //   ({ attributes: [...state.attributes, `${element.name}: ${element.value_name}`] }))));
  // }

  decreaseCount() {
    const { productCount } = this.state;
    if (productCount <= 1) return false;
    return this.setState({ productCount: productCount - 1 });
  }

  incrementCount() {
    const { productCount } = this.state;
    return this.setState({ productCount: productCount + 1 });
  }

  addCart() {
    const { item } = this.props.location.state;
    let { productCount } = this.state;
    if (!localStorage.products) {
      productCount += 1;
      localStorage.setItem('products', JSON.stringify([item]));
      return this.setState({ productCount: 1 });
    }
    const products = JSON.parse(localStorage.getItem('products'));
    if (localStorage.products.includes(item.id)) {
      const index = products.findIndex((x) => x.id === item.id);
      products[index].quantity += productCount;
      localStorage.setItem('products', JSON.stringify(products));
      return this.setState({ productCount: 1 });
    }
    productCount += 1;
    localStorage.setItem('products', JSON.stringify([...products, item]));
    return this.setState({ productCount: 1 });
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
    const { productCount } = this.state;
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
        <div>
          <p>Quantidade</p>
          <button onClick={this.decreaseCount}>-</button>
          <p>{productCount}</p>
          <button onClick={this.incrementCount}>+</button>
          <button onClick={this.addCart}>Adicionar ao carrinho</button>
        </div>
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
