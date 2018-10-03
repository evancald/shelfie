import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
  render() {
    const inventory = this.props.inventory.map((product, i) => {
      return (
        <div key={i}>
          <Product name={product.name} price={product.price} img={product.img} />
        </div>
      )
    })
    return (
      <div>
        Dashboard
        {inventory}
      </div>
    )
  }
}

export default Dashboard;