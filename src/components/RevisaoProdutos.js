import React from 'react';
import ItemCardRevisar from './ItemCardRevisar';
import './RevisaoProdutos.css';

class RevisaoProduto extends React.Component {
  constructor(props) {
    super(props);
    const valores = Object.values(JSON.parse(localStorage.getItem('products')));
    let valorAPagar = 0;
    for (let i = 0; i < valores.length; i += 1) {
      valorAPagar += valores[i].quantidade * valores[i].price;
    }
    this.state = {
      valorAPagar,
      valores,
    };
  }

  render() {
    const { valorAPagar, valores } = this.state;
    return (
      <div className="container-revisao">
        <h1>Revise seus produtos</h1>
        {valores.map((item) => (
          <div key={item.id}>
            <ItemCardRevisar item={item} />
          </div>
        ))}
        <h3>
          Total: R$
          {valorAPagar.toFixed(2)}
        </h3>
      </div>
    );
  }
}

export default RevisaoProduto;
