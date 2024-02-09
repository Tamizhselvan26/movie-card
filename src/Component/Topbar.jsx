import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {LogOut} from "./LogOut"

export default function Topbar({ mode, setMode }) {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/portal/home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/portal/movie")}>
            Movies
          </Button>
          <Button color="inherit" onClick={() => navigate("/portal/addmovie")}>
            Add-Movies
          </Button>
          <Button
            style={{ marginLeft: "60%" }}
            startIcon={mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            color="inherit"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? "dark" : "light"} Mode
          </Button>
          <Button
            style={{ marginLeft: "auto" }}
            color="inherit"
            onClick={() => LogOut() }
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}