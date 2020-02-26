import React from 'react';
import boleto from '../imgs/codigo-barras.jpeg';
import cartao from '../imgs/cartao-credito.jpeg';

class MetodoPagamento extends React.Component {

  render() {
    return (
      <div>
        <p>Método de pagamento</p>
        <form>
          <p>Boleto</p>
          <input type="radio" name="pagamento" value="Boleto" />
          <img src={boleto} alt="Boleto" height="25px" />
          <p>Cartão de Crédito</p>
          <input type="radio" name="pagamento" value="Visa" /> Visa
          <img src={cartao} alt="Visa" height="25px" />
          <input type="radio" name="pagamento" value="MasterCard" />MasterCard
          <img src={cartao} alt="MasterCard" height="25px" />
          <input type="radio" name="pagamento" value="Maestro" />Maestro
          <img src={cartao} alt="Maestro" height="25px" />
        </form>
      </div>
    );
  }

}

export default MetodoPagamento;
