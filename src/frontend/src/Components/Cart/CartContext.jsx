import React, { createContext, useState } from "react";
import { createActor } from "../../declarations/backend";

export const CartContext = createContext();

function CartProvider({ children, identity }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(BigInt(0));

  const canisterId = import.meta.env.VITE_BACKEND_CANISTER_ID;

  let backend = createActor(canisterId, {
    agentOptions: {
      identity: identity,
      host: "http://localhost:4943",
    },
  });

  const addToCart = async (product) => {
    await backend
      .addToCart(product.id, 1)
      .then((result) => {
        if (result) {
          getCart();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCart = async () => {
    try {
      await backend.getCart().then((cart) => {
        if (cart) {
          setCart(cart.ok);
          const aux = cart.ok.reduce((acc, item) => {
            return acc + BigInt(item.product.price) * BigInt(item.quantity);
          }, BigInt(0));
          setTotal(aux);
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const updateQuantity = async (index, quantity) => {
    await backend
      .updateQuantity(index, quantity)
      .then((result) => {
        if (result) {
          getCart();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeFromCart = async (index) => {
    await backend
      .removeFromCart(index)
      .then((result) => {
        if (result) {
          getCart();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        getCart,
        backend,
        updateQuantity,
        removeFromCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
