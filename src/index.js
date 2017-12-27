import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import route from './router/index';


/* css */
import './index.css';
import './assets/css/common.css'


store.subscribe(() => {
    console.log(store.getState())
});

ReactDOM.render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.getElementById('root')
);
