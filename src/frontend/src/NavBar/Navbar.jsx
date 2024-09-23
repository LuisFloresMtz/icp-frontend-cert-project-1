import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import SesionButton from "./SesionButton";

function Navbar({ isAuthenticated }) {
  return (
    <Container component="nav" sx={{ height: "8vh", padding: "2vh" }}>
      <Container sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <NavLink to="/">
          <Button variant="contained">Products</Button>
        </NavLink>
        <NavLink to="cart">
          <Button variant="contained">Cart</Button>
        </NavLink>
        <SesionButton isAuthenticated={isAuthenticated} />
      </Container>
    </Container>
  );
}

export default Navbar;
