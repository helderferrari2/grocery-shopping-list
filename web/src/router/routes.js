import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";


/**
 * Components
 */
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ShoppingLists from "../pages/ShoppingLists";
import Profile from "../pages/Profile";
import ShoppingListItems from "../pages/ShoppingListItems";
import Error404 from "../pages/Error404";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute exact={true} path="/shopping-lists" component={ShoppingLists} />
            <PrivateRoute path="/shopping-lists/:id" component={ShoppingListItems} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="*" component={Error404}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
