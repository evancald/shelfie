import React from 'react';

function Product(props) {
  const {name, price, img, id} = props;
  return(
    <div>
      Name: {name}
      <br />
      Price: {price}
      <br />
      <img src={img} alt="product" height="100px" width="100px" />
      <button onClick={() => props.deleteProduct(id)}>Delete</button>
      <button onClick={() => props.updateSelected(id)}>Edit</button>
    </div>
  )
}

export default Product;