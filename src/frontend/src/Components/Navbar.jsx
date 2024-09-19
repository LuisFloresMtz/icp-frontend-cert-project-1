import SesionButton from "./SesionButton";
import { Container, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

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
