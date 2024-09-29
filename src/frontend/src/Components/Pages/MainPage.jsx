import { useContext } from "react";
import Navbar from "../../NavBar/Navbar";
import { Outlet } from "react-router-dom";
import { Grid2, Container } from "@mui/material";
import { AuthContext } from "../../Auth/AuthContext";
import CartProvider from "../Cart/CartContext";
import Announcements from "../OpenChat/Announcements";

export default function MainPage() {
  const { isAuthenticated, identity } = useContext(AuthContext);

  return (
    <>
      <CartProvider identity={identity}>
        <Navbar isAuthenticated={isAuthenticated} />
        <Outlet context={{ identity }} />
      </CartProvider>
    </>
  );
}
