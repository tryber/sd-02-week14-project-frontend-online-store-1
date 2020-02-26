import React from 'react';
import states from './estados';

class InfoComprador extends React.Component {

  criarInput(type, name, placeholder) {
    console.log(this.props);
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
      />
    );
  }
  render() {
    const estados = states;
    return (
      <div>
        <form>
          {this.criarInput('text', 'nome', 'Nome Completo')}
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
