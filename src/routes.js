import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./pages/Header";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={() => <h1>Profile</h1>} />
        <Route path="/projects" component={() => <h1>Projects</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
