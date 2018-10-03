import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {

  deleteProduct = (id) => {
    axios.delete(`http://localhost:8080/api/product/${id}`).then(this.props.getProducts);
  }

  render() {
    const inventory = this.props.inventory.map((product, i) => {
      return (
        <div key={i}>
          <Product name={product.name} price={product.price} img={product.img} id={product.id} deleteProduct={this.deleteProduct}/>
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