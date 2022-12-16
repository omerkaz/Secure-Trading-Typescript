import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// if (process.env.NODE_ENV === 'development') {
//     const { worker } = require('./mocks/browser');
//     worker.start();
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);

reportWebVitals();