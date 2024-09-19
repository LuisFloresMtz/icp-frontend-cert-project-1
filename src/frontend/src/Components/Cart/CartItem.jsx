import React from "react";

export default function CartItem({ item, increment, decrement, index }) {
  return (
    <>
      <h2>{item.name}</h2>
      <p>Precio: {item.price}</p>
      <div className="actions">
        <button onClick={() => decrement(index)}>-</button>
        <p>Cantidad: {item.quantity}</p>
        <button onClick={() => increment(index)}>+</button>
      </div>
    </>
  );
}
