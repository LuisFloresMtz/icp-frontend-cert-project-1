import * as React from "react";
import {
  AppBar,
  Button,
  Container,
  Typography,
  Toolbar,
  Stack,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import SesionButton from "./SesionButton";

function Navbar({ isAuthenticated }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Shop
          </Typography>
        </Container>
        <Stack direction="row" spacing={2}>
          <Button component={NavLink} to="/" color="inherit">
            Products
          </Button>
          <Button component={NavLink} to="/cart" color="inherit">
            Cart
          </Button>
          <SesionButton isAuthenticated={isAuthenticated} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
