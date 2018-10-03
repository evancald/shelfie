import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    }
  }

  handleChange = (value, toUpdate) => {
    this.setState({[toUpdate]: value});
  }

  resetInputs = () => {
    this.setState({name: "", price: 0, imgurl: ""});
  }

  render() {
    return (
      <div>
        Form
        <input onChange={(e) => this.handleChange(e.target.value, 'name')} value={this.state.name} placeholder="Name"></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'price')} value={this.state.price} placeholder="Price"></input>
        <input onChange={(e) => this.handleChange(e.target.value, 'imgurl')} value={this.state.imgurl} placeholder="Img URL"></input>
        <button onClick={this.resetInputs}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    )
  }
}

export default Form;