import React from "react";
import "../styles/Navbar.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { NavLink } from "react-router-dom";

function Navbar() {
  const logout = () => {
    localStorage.removeItem("tokenSignin");
  };

  return (
    <div className="navbar_header">
      <img
        className="navbar_headerImage"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        height="45px"
        alt="Logo"
      />
      <div>
        <NavLink to="/post-form" className="btn-postform">
          <Fab
            variant="extended"
            size="small"
            color="primary"
            className="navbar_signinBtn"
          >
            <AddIcon fontSize="medium" /> Post Form
          </Fab>
        </NavLink>

        {/* <Fab variant="extended" size="small" color="secondary">
          <PersonAddOutlinedIcon fontSize="small" /> SIGN UP
        </Fab> */}

        <Fab variant="extended" size="small" color="secondary">
          <NavLink to="/" onClick={logout}>
            <LockOpenOutlinedIcon fontSize="small" />
            Logout
          </NavLink>
        </Fab>
      </div>
    </div>
  );
}

export default Navbar;
