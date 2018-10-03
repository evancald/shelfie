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
      inventory: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/inventory')
      .then(response => {
        this.setState({inventory: response.data});
      });
  }

  render() {
    return (
      <div>
        <Dashboard inventory={this.state.inventory} />
        <Form getProducts={this.componentDidMount()}/>
        <Header />
      </div>
    );
  }
}

export default App;
