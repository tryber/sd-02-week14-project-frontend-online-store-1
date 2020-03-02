import React from 'react';
import PropTypes from 'prop-types';
import './AddEmExibDetalhada.css';

class AddEmExibDetalhada extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qt: 1,
    };
    this.adicionando = this.adicionando.bind(this);
  }

  adicionando(qt) {
    const { enviaAoCarro } = this.props;
    return (
      <div className="adding">
        <button
          type="button"
          className="plusIcon"
          onClick={() => this.setState((state) => ({ qt: state.qt + 1 }))}
        >
          <i />
        </button>
        <p className="qtdNumber">{qt}</p>
        <button
          type="button"
          className="minusIcon"
          onClick={() => this.setState((state) => ({ qt: (state.qt > 1) ? state.qt - 1 : 1 }))}
        >
          <i />
        </button>
        <button type="button" className="btnAdd" onClick={() => enviaAoCarro(qt)}>
          Adicionar ao carrinho
        </button>
      </div>
    );
  }


  render() {
    const { qt } = this.state;
    return (
      <div className="roll">
        <p className="qtdText">Quantidade</p>
        {this.adicionando(qt)}
      </div>
    );
  }
}

AddEmExibDetalhada.propTypes = PropTypes.shape({
  enviaAoCarro: PropTypes.func,
}).isRequired;

export default AddEmExibDetalhada;
