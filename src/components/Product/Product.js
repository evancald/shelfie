import React from 'react';

function Product(props) {
  const {name, price, imgurl} = props;
  return(
    <div>
      Name: {name}
      <br />
      Price: {price}
      <br />
      <img src={imgurl} alt="product" height="100px" width="100px" />
    </div>
  )
}

export default Product;