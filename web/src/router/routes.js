import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/**
 * Components
 */
import Home from "../pages/Home"
import Login from "../pages/Login";
import Register from "../pages/Register";
import ShoppingLists from "../pages/ShoppingLists";
import Profile from "../pages/Profile";
import ShoppingListItems from "../pages/ShoppingListItems";

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={ShoppingLists} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/shopping-lists/:id" component={ShoppingListItems} />
            <Route path="/profile" component={Profile} />
            <Route path="*" component={Home}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;