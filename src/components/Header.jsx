import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { PawPrint } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "transparent", borderRadius: "5px" }}
        >
          <Toolbar className="header">
            <PawPrint size={32} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PetGuide
            </Typography>
            <Link to="/signup">
              <Button
                className="nav-button"
                sx={{ color: "black", backgroundColor: "transparent" }}
              >
                Sign Up
              </Button>
            </Link>
            <Link to="/signin">
              <Button
                className="nav-button"
                sx={{ color: "black", backgroundColor: "transparent" }}
              >
                Sign In
              </Button>
            </Link>
            <Link to="/">
              <Button
                className="nav-button"
                sx={{ color: "black", backgroundColor: "transparent" }}
              >
                Dashboard
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
