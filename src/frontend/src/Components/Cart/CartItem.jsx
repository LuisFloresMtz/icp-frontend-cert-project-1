import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Divider } from "@mui/material";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);
  return (
    <>
      <Divider />
      <h2>{item.product.name}</h2>
      <p>Precio: {item.product.price}</p>
      <div className="actions">
        <button
          onClick={() => updateQuantity(item.product.id, item.quantity--)}
        >
          -
        </button>
        <p>Cantidad: {item.quantity}</p>
        <button
          onClick={() => updateQuantity(item.product.id, item.quantity++)}
        >
          +
        </button>
      </div>
      <button onClick={() => removeFromCart(item.product.id)}>Eliminar</button>
    </>
  );
}
