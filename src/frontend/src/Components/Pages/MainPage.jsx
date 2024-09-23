import { useContext } from "react";
import Navbar from "../../NavBar/Navbar";
import { Outlet } from "react-router-dom";
import { Grid2 } from "@mui/material";
import { AuthContext } from "../../Auth/AuthContext";
import CartProvider from "../Cart/CartContext";
import Announcements from "../OpenChat/Announcements";

export default function MainPage() {
  const { isAuthenticated, identity } = useContext(AuthContext);

  return (
    <>
      <CartProvider identity={identity}>
        <Navbar isAuthenticated={isAuthenticated} />

        <Grid2 container spacing={2} sx={{ marginTop: "2rem" }}>
          <Grid2 size={4}>
            <Announcements />
          </Grid2>

          <Grid2 size={8}>
            <Outlet context={{ identity }} />
          </Grid2>
        </Grid2>
      </CartProvider>
    </>
  );
}
