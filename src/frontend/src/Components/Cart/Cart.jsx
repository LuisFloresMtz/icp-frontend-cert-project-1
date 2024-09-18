import React, { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
  const [cart, setCart] = useState([]);

  const initialCart = [
    {
      name: "Producto 1",
      price: 100,
      quantity: 1,
    },
    {
      name: "Producto 2",
      price: 200,
      quantity: 1,
    },
  ];

  useEffect(() => {
    setCart(initialCart);
  }, []);

  const handleIncrement = (index) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
  };

  const handleDecrement = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      setCart(newCart);
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            index={index}
            increment={handleIncrement}
            decrement={handleDecrement}
          />
        ))
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
}
