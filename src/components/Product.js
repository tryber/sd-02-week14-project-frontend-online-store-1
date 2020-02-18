import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props.location.state)
        return (<p>Olá</p>)
    }
}

export default Product;
