import React from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { PawPrint } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header({ authToken, setToken }) {
  const location = useLocation();

  const isPublishedDashboard = location.pathname.startsWith("/published/");

  const handleLogOut = () => {
    if(authToken) {
      setToken(null)
      localStorage.removeItem("authToken");
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "transparent", borderRadius: "5px" }}
        >
          <Toolbar className="header">
            <PawPrint size={32} />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black", fontWeight: "bold" }}
            >
              Pet
              <span style={{ color: "#A79D4D", fontWeight: "bold" }}>
                Guide
              </span>
            </Typography>
            {isPublishedDashboard ? (
              <Link to="/">
                <Button
                  className="nav-button"
                  sx={{ color: "black", backgroundColor: "transparent" }}
                >
                  Home
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/">
                  <Button
                    className="nav-button"
                    sx={{ color: "black", backgroundColor: "transparent" }}
                  >
                    Home
                  </Button>
                </Link>

                <Link to="/signup">
                  <Button
                    className="nav-button"
                    sx={{ color: "black", backgroundColor: "transparent" }}
                  >
                    Sign Up
                  </Button>
                </Link>
                {authToken ? (
                <Link to="/">
                  <Button
                    className="nav-button"
                    sx={{ color: "black", backgroundColor: "transparent" }}
                    onClick={handleLogOut}
                  >
                    Log Out
                  </Button>
                </Link>
                ) : (
                  <Link to="/signin">
                  <Button
                    className="nav-button"
                    sx={{ color: "black", backgroundColor: "transparent" }}
                  >
                    Sign In
                  </Button>
                </Link>
                )}

                <Link to="/dashboard">
                  <Button
                    className="nav-button"
                    sx={{ color: "black", backgroundColor: "transparent" }}
                  >
                    Dashboard
                  </Button>
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
