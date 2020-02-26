import React from 'react';

class ItemCardRevisar extends React.Component {
  render() {
    console.log(this.props)
    const { id, title, price, quantidade, thumbnail } = this.props.item
    console.log(id, price)
    return (
      <div key={id}>
        <img src={thumbnail} alt='Produto' />
        <div>{title}</div>
        <div>Total: R${quantidade * price}</div>
      </div>
    )
  }

}

export default ItemCardRevisar;