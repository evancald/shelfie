import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        {
          name: "shoes",
          price: 100,
          imgurl: "https://media03.toms.com/static/www/images/product/MENS/ATG/SIDE/10011588-GreyLinenMensPreston-P-1450x1015.jpg"
        },
        {
          name: "pants",
          price: 50,
          imgurl: "https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw5a00a9a9/images/hi-res/82905_COI.jpg?sw=750&sh=750&sm=fit&sfrm=png"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Dashboard inventory={this.state.inventory} />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
