import React from "react";
import Home from "./pages/HomePage/Home";
import { Route } from "wouter";
import "./globals.css";
import { Fragment } from "react-is";

function App() {
  return (
    <Fragment>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/test">
        <Home />
      </Route>
    </Fragment>
  );
}

export default App;
