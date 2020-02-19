import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import './itemList.css';


const pesquisarItem = require('../requisicaoItemAPI');

class ItensList extends React.Component {
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

  atualizarLista(porItem = 0, porCategoria = 0) {
    pesquisarItem(porItem, porCategoria).then(
      (resposta) => {
        this.setState({ itens: resposta, pesquisaItem: porItem, pesquisaCategoria: porCategoria });
      },
    );
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

  gerarLista() {
    const { itens, pesquisaItem, pesquisaCategoria } = this.state;
    console.log(itens, pesquisaItem, pesquisaCategoria);
    return (
      <div className="container">
        {itens.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))
        }
      </div>
    );
  }

  notfound() {
    const { itens } = this.state;
    if (!itens.length) return <div>Não foram encontrados resultados</div>;
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
};

export default ItensList;
