import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      img: ""
    }
  }

  handleChange = (value, toUpdate) => {
    this.setState({[toUpdate]: value});
  }

  resetInputs = () => {
    this.setState({name: "", price: 0, img: ""});
  }

  onSubmit = () => {
    axios.post('http://localhost:8080/api/product', {
      name: this.state.name,
      price: this.state.price,
      img: this.state.img
    }).then(this.props.getProducts, this.resetInputs());
  }

  render() {
    return (
      <div>
        Form
        <input onChange={(e) => this.handleChange(e.target.value, 'name')} value={this.state.name} placeholder="Name"></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'price')} value={this.state.price} placeholder="Price"></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'img')} value={this.state.img} placeholder="Img URL"></input>
        <button onClick={this.resetInputs}>Cancel</button>
        <button onClick={this.onSubmit}>Add to Inventory</button>
      </div>
    )
  }
}

export default Form;