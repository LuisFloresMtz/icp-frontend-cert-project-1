import React, { useContext, useEffect } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cart, getCart } = useContext(CartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {cart ? (
        cart.map((item, index) => (
          <CartItem key={index} item={item} index={index} />
        ))
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
}
