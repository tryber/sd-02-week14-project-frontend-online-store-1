import React from 'react';
import { Link } from 'react-router-dom';
import './ListaCarrinho.css';

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
    const {
      title, thumbnail, quantidade, price,
    } = this.state.valores[index];
    return (
      <div key={id} className="container-lista-carrinho">
        <button className="btn-x flex-linhas" onClick={() => this.removerProduto(index)}>X</button>
        <div className="nome-produto flex-linhas">{title}</div>
        <img src={thumbnail} alt={title} />
        <div className="flex-quantidade">
          <button
            className="btn-x flex-linhas"
            onClick={() => this.removerUnidade(index)}
          > - </button>
          <div className="descricao-produto flex-linhas quantidade">
            {quantidade}
          </div>
          <button
            className="btn-x flex-linhas"
            onClick={() => this.adicionarUnidade(index)}
          > + </button>
        </div>
        <div className="descricao-produto flex-linhas">
          Preço unitário: R$ {price}
        </div>
        <div className="descricao-produto flex-linhas">
          Total: R$ {(price * quantidade).toFixed(2)}
        </div>
      </div>
    );
  }

  render() {
    const { ids } = this.state;
    return (
      <div className="big-container-carrinho">
        {ids.map((id, index) => (
          this.formarCard(id, index)
        ))}
        <h2>
          Valor Total da Compra: R$
          {this.state.valorAPagar.toFixed(2)}
        </h2>
        <Link to="/Payment"><button className="pagamento">Finalizar Compra</button></Link>
      </div>
    );
  }
}

export default ListaCarrinho;
