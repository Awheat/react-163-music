/*
*
* router by wuwc 2017-12-20
*
* */
import React from 'react';
import {BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';

import Index from '../containers/Index';
import {asyncComponent} from '../utils/asyncComponent';

const routes = [
    {
        path: '/',
        exact: true,
        component: Index
    },
    {
        path: '/play/:songId',
        exact: false,
        component: asyncComponent(() => import('../containers/Play'))
    },
    {
        path: '/playList/:songSheetId',
        exact: false,
        component: asyncComponent(() => import('../containers/PlayList'))
    }
];

/* 本地环境使用BrowserRouter, 线上环境使用HashRouter */
let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;

const RouterConfig = (
    <Router>
        <Switch>
            {
                routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))
            }
            <Redirect from='' to="/"/>
        </Switch>
    </Router>
);

export default RouterConfig;