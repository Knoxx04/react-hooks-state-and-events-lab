import React, {useState} from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState("")

  function updateCart(){
    setCart(cart => !cart)
  }

  if(!cart){
    return (
      <li className="">
        <span>{name}</span>
        <span className="category">{category}</span>
        <button className="add" onClick={updateCart}>Add to Cart</button>
      </li>
  
    );
  }
  return (
    <li className="in-cart">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={updateCart}>Remove from Cart</button>
    </li>

  );
}

export default Item;
