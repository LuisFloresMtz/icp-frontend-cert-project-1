import React, { useContext, useEffect } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";
import { Typography, Button, Box, Divider, Container } from "@mui/material";
import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const { cart, getCart, total } = useContext(CartContext);
  const { identity } = useOutletContext();

  useEffect(() => {
    const fetchCart = async () => {
      await getCart();
    };
    fetchCart();
  }, []);

  function handlePay() {
    let totalPayment = BigInt(0);
    cart.forEach((item) => {
      const price = BigInt(item.product.price);
      totalPayment += BigInt(item.quantity) * price;
    });
    alert(`Total: ${totalPayment.toString()}`);
  }

  return (
    <form>
      <Container fixed sx={{ padding: "2rem" }}>
        <Typography gutterBottom variant="h5" component="div">
          Cart
        </Typography>
        {identity.getPrincipal().isAnonymous() ? (
          <p>Inicia sesion para ver tu carrito</p>
        ) : (
          <>
            {cart && cart.length > 0 ? (
              <>
                {cart.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
                <Divider sx={{ marginTop: 2 }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "text.secondary", marginRight: 2 }}
                  >
                    Total: {Number(total)}
                  </Typography>
                  <Button
                    onClick={handlePay}
                    variant="contained"
                    color="success"
                  >
                    Pay
                  </Button>
                </Box>
              </>
            ) : (
              <p>No hay productos en el carrito</p>
            )}
          </>
        )}
      </Container>
    </form>
  );
}
