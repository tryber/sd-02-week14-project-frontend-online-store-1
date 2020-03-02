import React from 'react';
import PropTypes from 'prop-types';

class AddEmExibDetalhada extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qt: 1,
    };
    this.adicionando = this.adicionando.bind(this);

  }
    adicionando(qt) {
      return (
        <div className="container">
            <button type="button" onClick={() => this.setState((state) => ({ qt: state.qt + 1 }))}>
              <i className="material-icons">add</i>
            </button>
          </div>
          <p>{qt}</p>
            <button type="button" onClick={() => this.setState((state) => ({ qt: (state.qt > 1) ? state.qt - 1 : 1 }))}>
              <i className="material-icons">remove</i>
            </button>
          </div>
          <button type="button" onClick={() => this.props.enviaCard(this.state.qt)}>
            Adicionar ao carrinho
          </button>
        </div>
      );


  render() {
    return (
      <div className="quantidade">
        <strong>Quantidade</strong>
        {this.adicionando(qt)}
      </div>
    );
  }
}

export default AddEmExibDetalhada;