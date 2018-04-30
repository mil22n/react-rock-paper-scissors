import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Main from './components/main/main';
import Game from './components/game/game';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/game" component={Game}/>
                <Route path="/" component={Main}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('container'));
