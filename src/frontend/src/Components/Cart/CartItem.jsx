import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Divider, Typography, Button, Container } from "@mui/material";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  const handleIncrease = () => {
    const newQuantity = item.quantity + 1;
    updateQuantity(item.product.id, newQuantity);
  };

  const handleDecrease = () => {
    const newQuantity = item.quantity - 1;
    if (newQuantity <= 0) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.product.id, newQuantity);
    }
  };

  return (
    <>
      <Divider />
      <Typography gutterBottom variant="h5" component="div">
        {item.product.name}
      </Typography>
      <Container>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Precio: {item.product.price}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Cantidad: {item.quantity}
        </Typography>
      </Container>
      <Container>
        <Button onClick={handleDecrease}>-</Button>
        <Button onClick={handleIncrease}>+</Button>
        <Button onClick={() => removeFromCart(item.product.id)}>
          Eliminar
        </Button>
      </Container>
    </>
  );
}
