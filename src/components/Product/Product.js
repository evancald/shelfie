import React from 'react';
import '../../App.css';

function Product(props) {
  const {name, price, img, id} = props;
  return(
    <div className="product-container">
      <div className="product-image">
        <img src={img} alt="product" width="200px" height="200px"/>
      </div>
      <div className="product-details">
        <div className="product-info">
          <h3>{name}</h3>
          <h3>{price}</h3>
        </div>
        <div className="product-button-container">
          <button className="product-button" onClick={() => props.deleteProduct(id)}>Delete</button>
          <button className="product-button" onClick={() => props.updateSelected(id)}>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Product;