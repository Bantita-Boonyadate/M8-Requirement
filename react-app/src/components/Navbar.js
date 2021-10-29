import React from "react";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { NavLink } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";

function Navbar({ className }) {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className={className}>
      <div className="navbar_header">
        <NavLink to="/home">
          <img
            className="navbar_headerImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            height="45px"
            alt="Logo"
          />
        </NavLink>

        <div className="navbar_icon">
          <NavLink to="/post-form" className="btn-postform">
            <Fab variant="extended" size="small" color="primary">
              <AddIcon fontSize="medium" />
            </Fab>
          </NavLink>

          <NavLink to="/map" className="btn-place">
            <Fab variant="extended" size="small" color="secondary">
              <PlaceIcon />
            </Fab>
          </NavLink>

          <NavLink to="/" onClick={logout} className="btn-logout">
            <Fab variant="extended" size="small" color="secondary">
              <LockOpenOutlinedIcon fontSize="small" />
              Logout
            </Fab>
          </NavLink>
        </div>
      </div>
      
    </div>
  );
}

export default styled(Navbar)`
  .navbar_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-bottom: 1px solid #dee2e6;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    padding: 15px;
    width: 100%;
  }
  .navbar_icon {
    display: flex;
  }
  .btn-postform {
    margin-right: 10px;
    text-decoration: none;
  }
  .btn-place {
    margin-right: 10px;
    text-decoration: none;
  }
  .btn-logout {
    text-decoration: none;
  }
  @media only screen and (min-width: 425px) {
  
}
`;
