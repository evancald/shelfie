import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import '../../App.css';
import Header from '../Header/Header';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
  }

  componentDidMount = () => {
    this.getProducts()
  }

  getProducts = () => {
    axios.get('http://localhost:8080/api/inventory')
      .then(response => {
        const sortedResponse = response.data.sort(function(a, b) {
          return a.name.localeCompare(b.name)
        }
        )
        this.setState({inventory: sortedResponse});
      });
  }

  deleteProduct = (id) => {
    axios.delete(`http://localhost:8080/api/product/${id}`)
      .then(() => this.getProducts());
  }

  render() {
    const inventory = this.state.inventory.map((product, i) => {
      return (
        <div key={i}>
          <Product name={product.name} price={product.price} img={product.img} id={product.id} deleteProduct={this.deleteProduct} />
        </div>
      )
    })
    return (
      <div>
        <Header />
        <div className="dashboard-container">
          {inventory}
        </div>
      </div>
    )
  }
}

export default Dashboard;