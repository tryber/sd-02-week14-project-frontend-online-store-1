import React from 'react';
import ItemCardRevisar from './ItemCardRevisar';

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
      <div>
        <p>RevisaoProduto</p>
        {valores.map((item) => (
          <div key={item.id}>
            <ItemCardRevisar item={item} />
          </div>
        ))}
        <p>Total: R$ {valorAPagar}</p>
        <p>------------------------</p>
      </div>
    );
  }

}

export default RevisaoProduto;
