import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';

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
    }).then(() => {
      this.props.getProducts();
      this.resetInputs()
    });
  }

  onConfirmEdit = (id) => {
    axios.put(`http://localhost:8080/api/product/${id}`, {
      name: this.state.name,
      price: this.state.price,
      img: this.state.img
    }).then(() => {
      this.props.getProducts();
      this.resetInputs()
    });
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-image">
          <img src={this.state.img} alt="current product" height="100px" width="100px" />
        </div>
        <div>
          <h5>Name:</h5>
          <input onChange={(e) => this.handleChange(e.target.value, 'name')} value={this.state.name} placeholder="Name"></input>
          <h5>Price:</h5>
          <input onChange={(e) => this.handleChange(e.target.value, 'price')} value={this.state.price} placeholder="Price"></input>
          <h5>Img URL:</h5>
          <input onChange={(e) => this.handleChange(e.target.value, 'img')} value={this.state.img} placeholder="Img URL"></input>
        </div>
        <div className="form-buttons-container">
          <button className="form-button" onClick={this.resetInputs}>Cancel</button>
          {this.state.selected ? <button className="form-button" onClick={() => this.onConfirmEdit(this.state.id)}>Save Changes</button> : <button className="form-button" onClick={this.onSubmit}>Add to Inventory</button> }
        </div>
      </div>
    )
  }
}

export default Form;