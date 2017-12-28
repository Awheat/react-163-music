/*
*
* store by wuwc on 2017-12-21
*
* */
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    combineReducers(reducer),
    applyMiddleware(thunk)
);

export default store;