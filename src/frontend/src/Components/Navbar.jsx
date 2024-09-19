import * as React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import SesionButton from "./SesionButton";
import { CartContext } from "./Cart/CartContext";

const StyledBadge =
  styled(Badge) <
  BadgeProps >
  (({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

function Navbar({ isAuthenticated }) {
  const { cart } = useContext(CartContext);
  return (
    <Container component="nav" sx={{ height: "8vh", padding: "2vh" }}>
      <Container sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <NavLink to="/">
          <Button variant="contained">Products</Button>
        </NavLink>
        <NavLink to="cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cart.length || 0} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </NavLink>
        <SesionButton isAuthenticated={isAuthenticated} />
      </Container>
    </Container>
  );
}

export default Navbar;
