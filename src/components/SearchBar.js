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
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    if (event.keyCode === 13) this.setState({ searchItem: value });
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
    const { searchItem } = this.state;
    if (!searchItem) return <div>Você ainda não realizou uma busca</div>;
    return <div />;
  }

  didFindResults() {
    const { searchItem } = this.state;
    if (!searchItem) return <div>Não foram encontrados resultados</div>;
    return <ItensList search={searchItem} />;
  }

  render() {
    return (
      <div>
        {this.createInput()}
        {this.didSearch()}
        <div className="teste">
          <Categories />
          {this.didFindResults()}
        </div>
      </div>
    );
  }
}

export default SearchBar;
