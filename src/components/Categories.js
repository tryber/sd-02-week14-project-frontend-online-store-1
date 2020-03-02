import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderCategory = this.renderCategory.bind(this);
  }

  componentDidMount() {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  handleChange(event) {
    const { onChange } = this.props;
    onChange(event);
  }

  renderCategory(id, value) {
    return (
      <label htmlFor={id} key={id} className="category-options">
        <input
          name="option"
          type="radio"
          id={id}
          key={id}
          value={id}
          onClick={this.handleChange}
        />
        <div>{value}</div>
      </label>
    );
  }

  render() {
    const { data } = this.state;
    return (
      <div className="category-box">
        <div className="category-options-box">
          <p className="categorias">Categorias</p>
          {data.map((dat) => this.renderCategory(dat.id, dat.name))}
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  onChange: PropTypes.func.isRequired,
};


export default Categories;
