import { React, useContext, useEffect } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { AuthContext } from "../../Auth/AuthContext";
import CartProvider from "../Cart/CartContext";
import Announcements from "../OpenChat/Announcements";

export default function MainPage() {
  const { isAuthenticated, identity } = useContext(AuthContext);

  return (
    <>
      <CartProvider identity={identity}>
        <Navbar isAuthenticated={isAuthenticated} />

        <Container sx={{ display: "flex" }}>
          <Announcements />
          <Container>
            <Outlet context={{ identity }} />
          </Container>
        </Container>
      </CartProvider>
    </>
  );
}
