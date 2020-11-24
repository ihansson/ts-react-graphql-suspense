import {Header} from "./Header";
import React from "react";
import {Footer} from "./Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "../pages/Home";
import {Continent} from "../pages/Continent";
import {Country} from "../pages/Country";

export const Main = () => (
    <Router>
        <div>
            <Header/>
            <main>
                <Switch>
                    <Route path="/continent/:id">
                        <Continent/>
                    </Route>
                    <Route path="/country/:id">
                        <Country/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </main>
            <Footer/>
        </div>
    </Router>
);