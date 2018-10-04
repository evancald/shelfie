import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      img: "",
      id: 0,
      selected: null
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      this.setState({name: this.props.selected.name, price: this.props.selected.price, img: this.props.selected.img, id: this.props.selected.id, selected: this.props.selected});
    }
  }

  handleChange = (value, toUpdate) => {
    this.setState({[toUpdate]: value});
  }

  resetInputs = () => {
    this.setState({name: "", price: 0, img: "", id: 0, selected: null});
  }

  onSubmit = () => {
    axios.post('http://localhost:8080/api/product', {
      name: this.state.name,
      price: this.state.price,
      img: this.state.img
    }).then(this.props.getProducts, this.resetInputs());
  }

  onConfirmEdit = (id) => {
    //const id = this.state.selected.id;
    axios.put(`http://localhost:8080/api/product/${id}`, {
      name: this.state.name,
      price: this.state.price,
      img: this.state.img
    }).then(this.props.getProducts, this.resetInputs());
  }

  render() {
    return (
      <div>
        Form:
        <img src={this.state.img} alt="current product" height="100px" width="100px" />
        <input onChange={(e) => this.handleChange(e.target.value, 'name')} value={this.state.name} placeholder="Name"></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'price')} value={this.state.price} placeholder="Price"></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'img')} value={this.state.img} placeholder="Img URL"></input>
        <button onClick={this.resetInputs}>Cancel</button>
        <button onClick={this.onSubmit}>Add to Inventory</button>
        <button onClick={() => this.onConfirmEdit(this.state.id)}>Save Changes</button>
      </div>
    )
  }
}

export default Form;