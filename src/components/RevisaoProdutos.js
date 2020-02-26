import React from 'react';
import ItemCardRevisar from './ItemCardRevisar';

class RevisaoProduto extends React.Component {
  constructor(props) {
    super(props);
    const objProdutos = JSON.parse(localStorage.getItem('products'));
    const ids = Object.keys(objProdutos);
    const valores = Object.values(objProdutos);
    let valorAPagar = 0;
    for (let i = 0; i < ids.length; i += 1) {
      valorAPagar += objProdutos[ids[i]].quantidade * objProdutos[ids[i]].price;
    }
    this.state = {
      ids,
      valorAPagar,
      valores,
    };
  }
  render() {
    const { valorAPagar, valores } = this.state;
    return (
      <div>
        <p>RevisaoProduto</p>
        {valores.map(item => (
          <div key={item.id}>
            <ItemCardRevisar item={item} />
          </div>
        ))}
        <p>Total: R$ {valorAPagar}</p>
        <p>------------------------</p>
      </div>
    )
  }

}

export default RevisaoProduto;