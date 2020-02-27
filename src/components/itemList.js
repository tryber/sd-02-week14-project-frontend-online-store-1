import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import './itemList.css';

const pesquisarItem = require('../requisicaoItemAPI');

class ItensList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: [],
    };
  }

  componentDidMount() {
    const { search, categorie } = this.props;
    this.atualizarLista(search, categorie);
  }

  componentDidUpdate(prevProps, prevState) {
    const { search, categorie } = this.props;
    if (search !== prevState.pesquisaItem || categorie !== prevState.pesquisaCategoria) {
      pesquisarItem(search, categorie).then(
        (resposta) => {
          this.setState({ itens: resposta, pesquisaItem: search, pesquisaCategoria: categorie });
        },
      );
    }
  }

  atualizarLista(porItem = 0, porCategoria = 0) {
    pesquisarItem(porItem, porCategoria).then(
      (resposta) => {
        this.setState({ itens: resposta, pesquisaItem: porItem, pesquisaCategoria: porCategoria });
      },
    );
  }

  gerarLista() {
    const { itens, pesquisaItem, pesquisaCategoria } = this.state;
    const { modificaIconeCarrinho } = this.props;
    console.log(itens, pesquisaItem, pesquisaCategoria);
    return (
      <div className="container">
        {itens.map((item) => (
          <ItemCard item={item} key={item.id} modificaIconeCarrinho={modificaIconeCarrinho} />
        ))}
      </div>
    );
  }

  notfound() {
    const { itens } = this.state;
    const { search } = this.props;
    if (!itens.length && search) return <div>Não foram encontrados resultados</div>;
    return <div />;
  }

  render() {
    return (
      <Fragment>
        {this.notfound()}
        {this.gerarLista()}
      </Fragment>
    );
  }
}

ItensList.propTypes = {
  search: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
  modificaIconeCarrinho: PropTypes.func.isRequired,
};

export default ItensList;
