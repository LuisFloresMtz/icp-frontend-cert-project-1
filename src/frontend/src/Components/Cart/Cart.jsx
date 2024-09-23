import React, { useContext, useEffect } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";
import { Typography, Button } from "@mui/material";

export default function Cart() {
  const { cart, getCart } = useContext(CartContext);

  useEffect(() => {
    const fetchCart = async () => {
      await getCart();
    };

    fetchCart();
  }, []);

  function handlePay() {
    let total = 0;
    cart.map((item) => {
      total += item.quantity * item.product.price;
    });
    alert("Total: ", total);
  }

  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
        Cart
      </Typography>
      {cart && cart.length > 0 ? (
        cart.map((item, index) => (
          <CartItem key={index} item={item} index={index} />
        ))
      ) : (
        <p>No hay productos en el carrito</p>
      )}
      <Button onClick={handlePay}>Pay</Button>
    </div>
  );
}
