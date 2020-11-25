import {Header} from "./Header";
import React from "react";
import {Footer} from "./Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "../pages/Home";
import {Continent} from "../pages/Continent";
import {Country} from "../pages/Country";
import {Layout, Space} from 'antd'

const {Content} = Layout

export const Main = () => (
    <Router>
        <Layout>
            <Space align="center" direction="vertical" size="large">
                <div style={{maxWidth: '950px', padding: '50px 0'}}>
                    <Header/>
                    <Content>
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
                    </Content>
                    <Footer/>
                </div>
            </Space>
        </Layout>
    </Router>
);