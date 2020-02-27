import React from 'react';
import states from './estados';
import boleto from '../imgs/codigo-barras.jpeg';
import cartao from '../imgs/cartao-credito.jpeg';
import './InformacoesComprador.css';

class InfoComprador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nome: '',
      CPF: '',
      Email: '',
      Telefone: '',
      CEP: '',
      Endereço: '',
      Complemento: '',
      Número: '',
      Cidade: '',
      Estado: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.submitCompra = this.submitCompra.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(event) {
    const { value, name } = event.target;
    if (!value) this.setState({ [name]: 'incompleto' });
    else this.setState({ [name]: value });
  }

  criarInput(type, name, placeholder) {
    const nomear = this.state[name];
    let nomeDaClasse = 'normal';
    if (nomear === 'incompleto') nomeDaClasse = 'vermelho';
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={this.handleInput}
        className={nomeDaClasse}
      />
    );
  }

  gerarOsInputs() {
    return (
      <div>
        {this.criarInput('text', 'Nome', 'Nome Completo')}
        {this.criarInput('text', 'CPF', 'CPF')}
        {this.criarInput('email', 'Email', 'Email')}
        {this.criarInput('text', 'Telefone', 'Telefone')}
        {this.criarInput('text', 'CEP', 'CEP')}
        {this.criarInput('text', 'Endereço', 'Endereço')}
        {this.criarInput('number', 'Complemento', 'Complemento')}
        {this.criarInput('number', 'Número', 'Número')}
        {this.criarInput('text', 'Cidade', 'Cidade')}
      </div>
    );
  }

  gerarSelect() {
    const estados = states;
    return (
      <select name="Estado" onChange={this.handleInput}>
        <option>Estado</option>
        {estados.map((estado) => (
          <option
            key={Object.keys(estado)}
            value={Object.keys(estado)}
          >
            {Object.values(estado)}
          </option>
        ))}
      </select>
    );
  }

  handleClick() {
    this.setState({ selectPayment: true });
  }

  metodosPagamento() {
    return (
      <div>
        <p>Método de pagamento</p>
        <p>Boleto</p>
        <input type="radio" name="pagamento" value="Boleto" onClick={this.handleClick} />
        <img src={boleto} alt="Boleto" height="25px" />
        <p>Cartão de Crédito</p>
        <input type="radio" name="pagamento" value="Visa" onClick={this.handleClick} /> Visa
        <img src={cartao} alt="Visa" height="25px" />
        <input type="radio" name="pagamento" value="MasterCard" onClick={this.handleClick}
        />MasterCard
        <img src={cartao} alt="MasterCard" height="25px" />
        <input type="radio" name="pagamento" value="Maestro" onClick={this.handleClick} />Maestro
        <img src={cartao} alt="Maestro" height="25px" />
      </div>
    );
  }

  submitCompra(event) {
    event.preventDefault();
    const { selectPayment } = this.state;
    if (!selectPayment) {
      alert('Escolha uma forma de pagamento');
      return '';
    }
    const estadoAtual = Object.keys(this.state)
    const novoEstado = {};
    let temErro = '';
    estadoAtual.forEach(estado => {
      if (this.state[estado] === '' || this.state[estado] === 'incompleto') {
        novoEstado[estado] = 'incompleto';
        temErro = true;
      } else novoEstado[estado] = this.state[estado];
    });
    this.setState(novoEstado);
    if (!temErro) {
      alert('Compra efetuada');
      window.location.reload(true);
    }
    return '';
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form>
          {this.gerarOsInputs()}
          {this.gerarSelect()}
          {this.metodosPagamento()}
          <button onClick={this.submitCompra}>Pagar</button>
        </form>
      </div>
    );
  }

}

export default InfoComprador;
