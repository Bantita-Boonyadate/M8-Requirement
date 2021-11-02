import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import PostForm from "./components/PostForm";
import Timeline from "./components/Timeline";
import Map from "./components/Map";
import Profile from "./components/Profile";

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
        <Navbar />
        <Map />
      </Route>
      <Route path="/profile">
        <Navbar />
        <Profile />
      </Route>
      <Route path="/">
        <SignIn />
      </Route>
      
    </Switch>
  );
}

export default App;
