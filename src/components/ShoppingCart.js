import React from 'react';
import { Link } from 'react-router-dom';
import ListaCarrinho from './ListaCarrinho';
import BackArrow from '../imgs/back-arrow.png';
import Cart from '../imgs/img_290616.png';
import EmptyBox from '../imgs/empty.png';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {

  listaCheia() {
    if (localStorage.getItem('products')) {
      return (
        <div>
          <ListaCarrinho />
        </div>)
    }
  }

  listaVazia() {
    if (!localStorage.getItem('products')) {
      return (
        <div>
          <div className="minhaCaixa">
            <img src={EmptyBox} alt="Imagem de caixa vazia" className="caixa" />
            <p className="textoCaixa">Seu Carrinho Está Vazio</p>
          </div>
        </div>);
    }
  }

  render() {
    return (
      <div>
        <Link to="/">
          <img src={BackArrow} alt="Seta para voltar à página inicial" className="seta" />
        </Link>
        <div className="meuCarrinho">
          <img src={Cart} alt="Imagem de um carrinho de compras" className="carrinho" />
          <p className="textoCarrinho">Carrinho de Compras</p>
        </div>
        {this.listaVazia()}
        {this.listaCheia()}
      </div>
    )
  }
}

export default ShoppingCart;
