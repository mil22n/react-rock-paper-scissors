import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from "redux";

import Main from "./components/main/main";
import reducers from "./reducers";

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const createStoreWithMiddleware = applyMiddleware()(createStore);

        ReactDOM.render(
            <Provider store={createStoreWithMiddleware(reducers)}>
                <BrowserRouter>
                    <Route path="/" component={Main}/>
                </BrowserRouter>
            </Provider>,
            div);
    });
});