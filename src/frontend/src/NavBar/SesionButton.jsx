import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { Button } from "@mui/material";

function SesionButton({ isAuthenticated }) {
  const { login, logout } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated ? (
        <Button onClick={logout} color="inherit">
          Logout
        </Button>
      ) : (
        <Button onClick={login} color="inherit">
          Login
        </Button>
      )}
    </>
  );
}

export default SesionButton;
