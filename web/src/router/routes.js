import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/**
 * Components
 */
import Home from "../pages/Home"
import ShoppingLists from "../pages/ShoppingLists";
import ShoppingListItems from "../pages/ShoppingListItems";

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shopping-lists" component={ShoppingLists} />
            <Route path="/shopping-lists/:id" component={ShoppingListItems} />
            <Route path="*" component={Home}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;