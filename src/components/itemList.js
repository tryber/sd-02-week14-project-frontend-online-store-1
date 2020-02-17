import React from 'react';
import ItemCard from './ItemCard';
const pesquisarItem = require('../requisicaoItemAPI');

class ItensList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itens: [],
        };
    }

    componentDidMount() {
        const { search } = this.props
        pesquisarItem(search).then(
            resposta => {
                this.setState({ itens: resposta })
            }
        )
    }

    componentDidUpdate() {
        const { search } = this.props
        pesquisarItem(search).then(
            resposta => {
                this.setState({ itens: resposta })
            }
        )
    }

    gerarLista() {
        const { itens } = this.state
        return (
            <div>
                {itens.map(item => (
                    <ItemCard item={item} key={item.id} />
                ))
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.gerarLista()}
            </div>
        )
    }
}

export default ItensList;