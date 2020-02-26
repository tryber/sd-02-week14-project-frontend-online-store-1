import React from 'react';
import states from './estados';
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
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { value, name } = event.target
    if (!value) {
      this.setState({ [name]: 'incompleto' })
    }
    else { this.setState({ [name]: value }) }
  }

  criarInput(type, name, placeholder) {
    const nomear = this.state[name]
    let nomeDaClasse = 'normal'
    if (nomear === 'incompleto') {
      nomeDaClasse = 'vermelho' 
    }
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
  render() {
    const estados = states;
    console.log(this.state)
    return (
      <div>
        <form>
          {this.criarInput('text', 'Nome', 'Nome Completo')}
          {this.criarInput('text', 'CPF', 'CPF')}
          {this.criarInput('email', 'Email', 'Email')}
          {this.criarInput('text', 'Telefone', 'Telefone')}
          {this.criarInput('text', 'CEP', 'CEP')}
          {this.criarInput('text', 'Endereço', 'Endereço')}
          {this.criarInput('number', 'Complemento', 'Complemento')}
          {this.criarInput('number', 'Número', 'Número')}
          {this.criarInput('text', 'Cidade', 'Cidade')}
          <select name="estado" >
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
        </form>
      </div>
    );
  }

}

export default InfoComprador;
