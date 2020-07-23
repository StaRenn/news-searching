import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from 'react';
import {MainPage} from "./MainPage";

export const App = () => {

    return(
        <Router>
            <Switch>
                {/*<Route path={"/login"} render={LoginPage}/>*/}
                {/*<Route path={"/news"} render={NewsPage}/>*/}
                {/*<Route path={"/profile"} render={ProfilePage}/>*/}
                <Route path={"/"} render={MainPage}/>
            </Switch>
        </Router>
    )
}