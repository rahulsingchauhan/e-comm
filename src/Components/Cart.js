import React from "react";
import './Cart.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Shoes from "./Shoes";

const Cart = ({ items, total }) => {
  return (
<>
  <Navbar/>

    <div className="cart">
      <h2>Your Cart</h2>
      {items && items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h3>Total: ${total}</h3>
    </div>
  
    <Footer/>
    </>
  );
};

export default Cart;
