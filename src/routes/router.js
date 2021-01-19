import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../views/login/login";
import Register from "../views/register/register";
import Home from "../views/home";

export default function createRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route component={Home} />
    </Switch>
  );
}
