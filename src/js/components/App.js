import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from 'react';
import {MainPage} from "./MainPage";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {LoginPage} from "./LoginPage";

export const App = () => {

    return(
        <Router>
            <Route render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition key={location.key} classNames="fade" timeout={{
                        enter: 1000,
                        exit: 500,
                    }}>
                        <Switch key={location.key} location={location}>
                            <Route path={"/login"} exact component={LoginPage}/>
                            <Route path={"/news"} exact component={MainPage}/>
                            {/*<Route path={"/profile"} render={ProfilePage}/>*/}
                            <Route path={"/"} exact component={MainPage}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                )}/>
        </Router>
    )
}