import React from 'react';
const pesquisarItem = require('../requisicaoItemAPI');

class ItensList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itens: [],
        };
    }

    componentDidMount() {
        pesquisarItem().then(
            resposta => {
                console.log(resposta)
                this.setState({ itens: resposta })
            }
        )
    }

    testando() {
        const { itens } = this.state
        // if (!itens) return <div />
        return (
            <div>
                {
                    itens.map(item => (<li>{item.title}</li>
                    ))
                }
            </div>
        )
    }

    render() {
        const { itens } = this.state
        console.log(itens)
        return (
            <div>
                {this.testando()}
            </div>
        )
    }
}

export default ItensList;