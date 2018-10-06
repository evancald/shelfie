import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import placeholderImage from '../../assets/placeholder.png'
import Header from '../Header/Header';
import {Link, Redirect} from 'react-router-dom';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      img: "",
      id: 0,
    }
  }

  componentDidMount = () => {
    if (this.props.match.path === "/edit/:id") {
      const id = this.props.match.params.id;
      axios.get(`http://localhost:8080/api/product/${id}`)
        .then(response => {
          this.setState({
            name: response.data[0].name,
            price: response.data[0].price,
            img: response.data[0].img,
            id: response.data[0].id,
          });
        })
      }
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      this.resetInputs();
    }
  }

  handleChange = (value, toUpdate) => {
    this.setState({[toUpdate]: value});
  }

  resetInputs = () => {
    this.setState({name: "", price: 0, img: "", id: 0});
  }

  onSubmit = () => {
    axios.post('http://localhost:8080/api/product', {
      name: this.state.name,
      price: this.state.price,
      img: this.state.img
    }).then(() => {
      this.resetInputs();
      this.props.history.push("/");
    });
  }

  onConfirmEdit = (id) => {
    axios.put(`http://localhost:8080/api/product/${id}`, {
      name: this.state.name,
      price: this.state.price,
      img: this.state.img
    }).then(() => {
      this.resetInputs();
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="form-container">
          <div>
            {this.state.img ? <img className="form-image" src={this.state.img} alt="current product" /> : <img className="form-image" src={placeholderImage} alt="placeholder pic" />}
          </div>
          <div>
            <div className="form-input">
              <h5>Name:</h5>
              <input onChange={(e) => this.handleChange(e.target.value, 'name')} value={this.state.name} placeholder="Name"></input>
            </div>
            <div className="form-input">
              <h5>Price:</h5>
              <input onChange={(e) => this.handleChange(e.target.value, 'price')} value={this.state.price} placeholder="Price"></input>
            </div>
            <div className="form-input">
              <h5>Img URL:</h5>
              <input onChange={(e) => this.handleChange(e.target.value, 'img')} value={this.state.img} placeholder="Img URL"></input>
            </div>
          </div>
          <div className="form-buttons-container">
            <button className="form-button" onClick={this.resetInputs}><Link to="/">Cancel</Link></button>
            {(this.props.match.path === "/edit/:id") ? <button className="form-button" onClick={() => this.onConfirmEdit(this.state.id)}> Save Changes </button> : <button className="form-button" onClick={this.onSubmit}> Add to Inventory </button> }
          </div>
        </div>
      </div>
    )
  }
}

export default Form;