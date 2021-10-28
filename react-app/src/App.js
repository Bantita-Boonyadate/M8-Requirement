import React from "react";
import "./App.css";
// import Fab from "@mui/material/Fab";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
// import Modal from '@mui/material/Modal';
// import Post from "./components/Post";
import { Switch, Route } from "react-router";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import PostForm from "./components/PostForm";
import Timeline from "./components/Timeline";
import Map from "./components/Map";

function App() {
  return (
    <Switch>
      <Route path="/home">
        <Navbar />
        <Home />
      </Route>
      <Route path="/Timeline">
        <Navbar />
        <Timeline />
      </Route>
      <Route path="/post-form">
        <Navbar />
        <PostForm />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/map">
        <Map />
      </Route>
      <Route path="/">
        <SignIn />
      </Route>
      
    </Switch>
  );
}

export default App;
