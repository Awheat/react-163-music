import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import {asyncComponent} from '../utils/asyncComponent';
import Index from '../containers/Index';

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
        path: '/playList',
        exact: false,
        component: asyncComponent(() => import('../containers/PlayList'))
    }
];

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