import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
  inventory = this.props.inventory.map((product, i) => {
    return (
      <div key={i}>
        <Product name={product.name} price={product.price} imgurl={product.imgurl} />
      </div>
    )
  })
  render() {
    return (
      <div>
        Dashboard
        {this.inventory}
      </div>
    )
  }
}

export default Dashboard;