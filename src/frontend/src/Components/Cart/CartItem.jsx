import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Divider, Typography, Button, Container } from "@mui/material";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  const handleIncrease = () => {
    const newQuantity = item.quantity + BigInt(1);
    updateQuantity(item.product.id, newQuantity);
  };

  const handleDecrease = () => {
    const newQuantity = item.quantity - BigInt(1);
    if (newQuantity <= BigInt(0)) {
      removeFromCart(item.product.id);
    } else {
      updateQuantity(item.product.id, newQuantity);
    }
  };

  const quantity = Number(item.quantity);
  const price = Number(item.product.price);

  return (
    <>
      <Divider sx={{ marginY: "1rem", marginX: "0" }} />
      <Container>
        <Typography gutterBottom variant="h5" component="div">
          {item.product.name}
        </Typography>
        <Container sx={{ paddingX: "0" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Precio: {price}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Cantidad: {quantity}
          </Typography>
        </Container>
        <Button onClick={handleDecrease}>-</Button>
        <Button onClick={handleIncrease}>+</Button>
        <Button onClick={() => removeFromCart(item.product.id)}>
          Eliminar
        </Button>
      </Container>
    </>
  );
}
