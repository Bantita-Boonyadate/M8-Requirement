import React from "react";
import "../styles/Navbar.css";
import Fab from "@mui/material/Fab";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { NavLink } from "react-router-dom";

function Navbar() {
    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("name");
    }
  return (
    <div className="navbar_header">
      <img
        className="navbar_headerImage"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        height="45px"
        alt="Logo"
      />
      <div>
        <NavLink to="/sign-in">
          <Fab
            variant="extended"
            size="small"
            color="primary"
            className="navbar_signinBtn"
          >
            <LockOpenOutlinedIcon fontSize="small" /> SIGN IN
          </Fab>
        </NavLink>

        {/* <Fab variant="extended" size="small" color="secondary">
          <PersonAddOutlinedIcon fontSize="small" /> SIGN UP
        </Fab> */}

        <Fab variant="extended" size="small" color="secondary">
          <LockOpenOutlinedIcon fontSize="small" onClick={logout} /> Logout
        </Fab>

      </div>
    </div>
  );
}

export default Navbar;
