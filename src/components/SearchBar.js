import React from 'react';

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
    this.setState({ searchItem: value });
  }

  createInput() {
    return (
        <input
            type="text"
            id="searchBar"
            value={this.state.searchItem}
            onChange={this.handleChange}
          />
      );
  }

  didSearch() {
    const { searchItem } = this.state;
    if (!searchItem) return <div>Você ainda não realizou uma busca</div>;
    return <div />;
  }

  render() {
      return (
          <div>
              {this.createInput()}
              {this.didSearch()}
          </div>
        );
    }
}

export default SearchBar;
