import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/projects" component={Repositories} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}
