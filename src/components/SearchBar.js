import React from 'react';
import ItensList from './itemList';
import Categories from './Categories';
import './Categories.css';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: '',
      searchCategorie: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    if (event.keyCode === 13) this.setState({ searchItem: value });
  }

  handleClick(event) {
    const { value } = event.target;
    const { searchCategorie } = this.state;
    const estado = event.target
    if (value === searchCategorie) {
      this.setState({ searchCategorie: '' });
      estado.checked = false;
    } else this.setState({ searchCategorie: value });
  }

  createInput() {
    return (
      <input
        type="text"
        id="searchBar"
        onKeyDown={this.handleChange}
      />
    );
  }

  didSearch() {
    const { searchItem, searchCategorie } = this.state;
    if (!searchItem && !searchCategorie) return <div>Você ainda não realizou uma busca</div>;
    return <div />;
  }

  didFindResults() {
    const { searchItem, searchCategorie } = this.state;
    if (!searchItem && !searchCategorie) return <div>Não foram encontrados resultados</div>;
    return <ItensList search={searchItem} categorie={searchCategorie} />;
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.createInput()}
        {this.didSearch()}
        <div className="teste">
          <Categories onChange={this.handleClick} />
          {this.didFindResults()}
        </div>
      </div>
    );
  }
}

export default SearchBar;
