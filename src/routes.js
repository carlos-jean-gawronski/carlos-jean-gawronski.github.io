import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./pages/Header";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={() => <h1>Home</h1>} />
        <Route path="/profile" component={() => <h1>Profile</h1>} />
        <Route path="/projects" component={() => <h1>Projects</h1>} />
        <Route path="/contact" component={() => <h1>Contact</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
