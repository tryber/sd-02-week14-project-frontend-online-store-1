import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    geraProduto() {
    const { title, price, thumbnail } = this.props.location.state.item;
      return (
          <div className="productContainer">
            <div className="titulo">{title} - {price}</div>
            <img src={thumbnail} className="productImage" alt="Imagem do produto clicado" />
            <div className="especificacoesTecnicas"></div>
          </div>
      )
    }

    render() {
    console.log(this.props.location.state.item);
    return (
    <div>
    {this.geraProduto(this.props.location.state)}
    </div>
    )
    }
}

export default Product;
