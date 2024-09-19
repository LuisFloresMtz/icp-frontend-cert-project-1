import { React, useContext } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { AuthContext } from "../../Auth/AuthContext";

export default function MainPage() {
  const { isAuthenticated } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <Container>
        <Outlet context={{ addToCart, cart }} />
      </Container>
    </>
  );
}
