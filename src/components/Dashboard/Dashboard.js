import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import '../../App.css';

class Dashboard extends Component {

  deleteProduct = (id) => {
    console.log('[in deleteProduct]')
    axios.delete(`http://localhost:8080/api/product/${id}`)
      .then(() => this.props.getProducts());
  }

  render() {
    const {updateSelected} = this.props;
    console.log("inventory", this.props.inventory)
    const inventory = this.props.inventory.map((product, i) => {
      return (
        <div key={i}>
          <Product name={product.name} price={product.price} img={product.img} id={product.id} deleteProduct={this.deleteProduct} updateSelected={updateSelected}/>
        </div>
      )
    })
    return (
      <div className="dashboard-container">
        {inventory}
      </div>
    )
  }
}

export default Dashboard;