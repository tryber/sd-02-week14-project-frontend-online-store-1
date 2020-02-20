import React from 'react';
import { Link } from 'react-router-dom';
import CardShoppinCar from './CardShoppingCar';
import BackArrow from '../imgs/back-arrow.png';
import Cart from '../imgs/img_290616.png';
import EmptyBox from '../imgs/empty.png';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {

  carrinhoComItens() {
    const arranjoItens = localStorage.getItem('itensCarrinho')
    if (localStorage.getItem('itensCarrinho')) {
      return (
        <div>
          <div>Tem coisas aqui!</div>
          {/* {arranjoItens.map((produtoID) => {
            <li key={produtoID}><CardShoppinCar id={produtoID} /></li>
          })} */}
        </div>
      )
    }
  }

  carrinhoVazio() {
    if (!localStorage.getItem('itensCarrinho')) {
      return (
        <div>
          <Link to="/">
            <img src={BackArrow} alt="Seta para voltar à página inicial" className="seta" />
          </Link>
          <div className="meuCarrinho">
            <img src={Cart} alt="Imagem de um carrinho de compras" className="carrinho" />
            <p className="textoCarrinho">Carrinho de Compras</p>
          </div>
          <div className="minhaCaixa">
            <img src={EmptyBox} alt="Imagem de caixa vazia" className="caixa" />
            <p className="textoCaixa">Seu Carrinho Está Vazio</p>
          </div>
        </div>
      )
    }
  }

  render() {
    return (<div>
      {this.carrinhoVazio()}
      {this.carrinhoComItens()}
    </div>)
  }
}
export default ShoppingCart;
