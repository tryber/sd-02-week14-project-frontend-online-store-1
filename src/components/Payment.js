import React from 'react';
import { Link } from 'react-router-dom';
import RevisaoProdutos from './RevisaoProdutos';
import InformacoesComprador from './InformacoesComprador';
import MetodoPagamento from './MetodoPagamento';
import BackArrow from '../imgs/back-arrow.png';

class Payment extends React.Component {

  render() {
    return (
      <div>
        <Link to="/shopping-cart">
          <img src={BackArrow} alt="Seta para voltar à página inicial" className="seta" />
        </Link>
        <RevisaoProdutos />
        <InformacoesComprador />
        <MetodoPagamento />
        <button>Pagar</button>
      </div>
    );
  }
}

export default Payment;
