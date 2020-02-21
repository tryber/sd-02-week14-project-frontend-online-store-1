import React from 'react';

class ListaCarrinho extends React.Component {
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

  setarNovoLocalStorage(update, valorAPagar) {
    this.setState(() => {
      const paraString = {};
      update.forEach((elemento) => {
        paraString[elemento.id] = elemento;
      });
      localStorage.setItem('products', JSON.stringify(paraString));
      return { valores: update, valorAPagar };
    });
  }

  removerProduto(index) {
    const { price, quantidade } = this.state.valores[index];
    const novosValoresAPAgar = this.state.valorAPagar - (price * quantidade);
    const novosProdutos = this.state.valores.slice();
    const novosIds = this.state.ids.slice();
    novosIds.splice(index, 1);
    novosProdutos.splice(index, 1);
    this.setState(() => {
      const paraString = {};
      novosProdutos.forEach((elemento) => {
        paraString[elemento.id] = elemento;
      });
      localStorage.setItem('products', JSON.stringify(paraString));
      return { ids: novosIds, valorAPagar: novosValoresAPAgar, valores: novosProdutos };
    });
  }

  removerUnidade(index) {
    let { quantidade } = this.state.valores[index];
    const { price } = this.state.valores[index];
    if (quantidade === 0) return '';
    quantidade -= 1;
    let { valorAPagar } = this.state;
    valorAPagar -= price;
    const update = this.state.valores;
    update[index].quantidade = quantidade;
    this.setarNovoLocalStorage(update, valorAPagar);
    return '';
  }

  adicionarUnidade(index) {
    let { quantidade } = this.state.valores[index];
    const { price } = this.state.valores[index];
    quantidade += 1;
    let { valorAPagar } = this.state;
    valorAPagar += price;
    const update = this.state.valores;
    update[index].quantidade = quantidade;
    this.setarNovoLocalStorage(update, valorAPagar);
  }

  formarCard(id, index) {
    const { title, thumbnail, quantidade, price } = this.state.valores[index];
    return (
      <div key={id} style={{ textAlign: 'center' }}>
        <button onClick={() => this.removerProduto(index)}>Excluir</button>
        <p>{title}</p>
        <img src={thumbnail} alt={title} />
        <button onClick={() => this.removerUnidade(index)}>-</button>
        <p>Quantidade: {quantidade}</p>
        <button onClick={() => this.adicionarUnidade(index)}>+</button>
        <p>Preço unitário: {price}</p>
        <p>Preço acumulado: {price * quantidade}</p>
        <p>---------------------</p>
      </div>
    );
  }

  render() {
    console.log(this.state);
    const { ids } = this.state;
    return (
      <div>
        {ids.map((id, index) => (
          this.formarCard(id, index)
        ))}
        <p>Preço Total: {this.state.valorAPagar}</p>
        <button>Pagamento!</button>
      </div>
    );
  }
}

export default ListaCarrinho;
