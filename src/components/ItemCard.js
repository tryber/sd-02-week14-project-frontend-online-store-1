import React from 'react';


class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itens: [],
        };
    }
    render() {
        const { title, price, available_quantity, thumbnail } = this.props.item;
        return (
            <div>
                <div>Nome do Produto: {title}</div>
                <img src={thumbnail} alt="Produto" />
                <p>Preço: R$ {price}</p>
                <p>Quantidade: {available_quantity} un.</p>
                <p>-------------------------------------</p>
            </div>
        )
    }
}

export default ItemCard;