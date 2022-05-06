import React, { useState, useEffect } from "react";
// import "../styles/cart.css";
import "./Cart.css"
const Cart = ({ cart, setCart, handleChange }) => {
  const [Cost, setCost] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handleCost();
  };

  const handleCost = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.Cost));
    setCost(ans);
  };

  useEffect(() => {
    handleCost();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.url} alt="" />
              <h3 id="h3">{item.Name}</h3>
            </div>
              <div>
                <button onClick={() => handleChange(item, 1)}>+</button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <div>
                <span>{item.Cost}</span>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
        </div>
      ))}
      <div className="total">
        <span style={{fontSize:"22px",color:"teal",fontWeight:"bold"}}>Total Cost of your Cart</span>
        <span style={{fontSize:"22px",fontWeight:"bold",color:"green"}}> Rs - {Cost}</span>
      </div>
    </article>
  );
};

export default Cart;
