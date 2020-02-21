import React from 'react';
import { Link } from 'react-router-dom';
import ItensList from './itemList';
import Categories from './Categories';
// import Cart from '../imgs/img_290616.png';
import './Categories.css';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    const objProdutos = JSON.parse(localStorage.getItem('products'));
    const ids = objProdutos ? Object.keys(objProdutos).length : 0;
    this.state = {
      searchItem: '',
      searchCategorie: '',
      nItens: ids,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.adicionaItemImgCarrinho = this.adicionaItemImgCarrinho.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    if (event.keyCode === 13) this.setState({ searchItem: value });
  }

  handleClick(event) {
    const { value } = event.target;
    const { searchCategorie } = this.state;
    const estado = event.target;
    if (value === searchCategorie) {
      this.setState({ searchCategorie: '' });
      estado.checked = false;
    } else this.setState({ searchCategorie: value });
  }

  createInput() {
    return (
      <div className="barraPesquisa">
        <input
          type="text"
          id="searchBar"
          onKeyDown={this.handleChange}
          className="inputBar"
        />
      </div>
    );
  }

  adicionaItemImgCarrinho() {
    const objProdutos = JSON.parse(localStorage.getItem('products'));
    const ids = Object.keys(objProdutos).length;
    this.setState({
      nItens: ids,
    });
  }

  criarLinkCarrinho() {
    const { nItens } = this.state;
    return (
      <div className="iconeCarrinho">
        <Link to="./shopping-cart">
          {/* <img src={Cart} alt="carrinho" className="iconeCarrinho" /> */}
          <div className="numeroItens">
            <p>{nItens}</p>
          </div>
        </Link>
      </div>
    );
  }

  didSearch() {
    const { searchItem, searchCategorie } = this.state;
    if (!searchItem && !searchCategorie) {
      return (
        <div className="textoBusca">Você ainda não realizou uma busca</div>);
    }
    return <div />;
  }

  didFindResults() {
    const { searchItem, searchCategorie } = this.state;
    if (!searchItem && !searchCategorie) {
      return (
        <div className="textoBusca">Não foram encontrados resultados</div>)
    };
    return (<ItensList
      search={searchItem}
      categorie={searchCategorie}
      modificaIconeCarrinho={this.adicionaItemImgCarrinho}
    />);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="partedeCima">
          {this.createInput()}
          {this.criarLinkCarrinho()}
        </div>
        {this.didSearch()}
        <div className="categoria">
          <Categories onChange={this.handleClick} />
          {this.didFindResults()}
        </div>
      </div>
    );
  }
}

export default SearchBar;
