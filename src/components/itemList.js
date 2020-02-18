import React from 'react';
import ItemCard from './ItemCard';
import PropTypes from 'prop-types';
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
    const { search } = this.props;
    pesquisarItem(search).then(
      (resposta) => {
        this.setState({ itens: resposta, pesquisa: search });
      },
    );
  }


  componentDidUpdate(prevProps, prevState) {
    const { search } = this.props;
    if (search !== prevState.pesquisa) {
      pesquisarItem(search).then(
        (resposta) => {
          this.setState({ itens: resposta, pesquisa: search });
        },
      )
    }
  }

  gerarLista() {
    const { itens } = this.state;
    console.log(itens);
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
    console.log(itens.length);
    if (!itens.length) return <div>Não foram encontrados resultados</div>;
    return <div />;
  }

  render() {
    return (
      <div>
        {this.notfound()}
        {this.gerarLista()}
      </div>
    );
  }
}

ItensList.propTypes = {
  search: PropTypes.string.isRequired
};

export default ItensList;
