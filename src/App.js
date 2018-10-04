import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      selected: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/inventory')
      .then(response => {
        this.setState({inventory: response.data});
      });
  }

  updateSelected = (id) => {
    let index = null;
    this.state.inventory.forEach((product, i) => {
      if (product.id === id) {
        index = i;
      }
    })
    this.setState({selected: this.state.inventory[index]});
  }

  render() {
    return (
      <div>
        <Header />
        <Dashboard inventory={this.state.inventory} getProducts={this.componentDidMount()} updateSelected={this.updateSelected}/>
        <Form getProducts={this.componentDidMount()} selected={this.state.selected}/>
      </div>
    );
  }
}

export default App;
