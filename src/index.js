import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configure } from 'axios-hooks'
import Axios from 'axios';

import App from './App/App';
import * as serviceWorker from './serviceWorker';

import 'konva';
import './assets/styles/index.css';

configure({
    axios: Axios.create({
        baseURL: 'http://www.mocky.io/v2/',
    })
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
