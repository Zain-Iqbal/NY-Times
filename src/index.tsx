import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter} from "react-router-dom";
import {Provider} from 'react-redux'

import ThemeProvider from './theme/theme-provider';
import App from './App';
import {store} from "./app/store";

import './index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </ThemeProvider>
);
