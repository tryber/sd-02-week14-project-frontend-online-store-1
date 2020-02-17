import React from 'react';
import BackArrow from '../imgs/back-arrow.png';
import Cart from '../imgs/img_290616.png';
import EmptyBox from '../imgs/empty.png';
import './ShoppingCart.css'

class ShoppingCart extends React.Component {


    render() {
        return ( 
        <div>
            <img src={BackArrow} alt="Seta para o lado esquerdo indicando para voltar a página" className="seta" />
            <div className="meuCarrinho">
            <img src={Cart} alt="Imagem de um carrinho de compras" className="carrinho" />
            <p className="textoCarrinho">Carrinho de Compras</p>
            </div>
            <div className="minhaCaixa">
            <img src={EmptyBox} alt="Imagem de caixa vazia indicando que não há itens no carrinho" className="caixa" />
            <p className="textoCaixa">Seu Carrinho Está Vazio</p>
            </div>
        </div>);
    }
}

export default ShoppingCart;
