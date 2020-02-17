import React from 'react';
import BackArrow from '../imgs/back-arrow.png';
import Cart from '../imgs/img_290616.png';
import EmptyBox from '../imgs/empty.png';
import './ShoppingCart.css'

class ShoppingCart extends React.Component {


    render() {
        return ( 
        <div>
            <img src={BackArrow} alt="Seta para o lado esquerdo indicando para voltar a página" id="seta"/>
              <div id="meuCarrinho">
                <img src={Cart} alt="Imagem de um carrinho de compras" id="carrinho"/>
                <p id="textoCarrinho">Carrinho de Compras</p>
              </div>
              <div id="minhaCaixa">
                <img src={EmptyBox} alt="Imagem de uma caixa vazia indicando que não há itens no carrinho" id="caixa"/>
                <p id="textoCaixa">Seu Carrinho Está Vazio</p>
            </div>
        </div>);
    }
}

export default ShoppingCart;
