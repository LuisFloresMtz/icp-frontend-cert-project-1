import React, { createContext, useState, useEffect } from "react";
import { createActor } from "../../declarations/backend";

export const CartContext = createContext();

function CartProvider({ children, identity }) {
  const [cart, setCart] = useState([]);

  const canisterId = import.meta.env.VITE_BACKEND_CANISTER_ID;

  let backend = createActor(canisterId, {
    agentOptions: {
      identity: identity,
      host: "http://localhost:4943",
    },
  });

  const addToCart = async (product) => {
    try {
      await backend.addToCart(product.id, 1).then((result) => {
        if (result) {
          getCart();
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getCart = async () => {
    try {
      await backend.getCart().then((cart) => {
        if (cart) {
          setCart(cart.ok);
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, getCart, backend }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
