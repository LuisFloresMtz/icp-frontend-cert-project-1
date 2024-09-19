import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { Button } from "@mui/material";

function SesionButton({ isAuthenticated }) {
  const { login, logout } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated ? (
        <Button onClick={logout} variant="contained" color="primary">
          Logout
        </Button>
      ) : (
        <Button onClick={login} variant="contained">
          Login
        </Button>
      )}
    </>
  );
}

export default SesionButton;
