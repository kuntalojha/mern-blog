// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Redux Toolkit import from redux/store.js
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  // This is without react-redux
  // <React.StrictMode>
  // <App />
  // </React.StrictMode>
  // Now we use Redux Toolkit

  <Provider store={store}>
    <App />
  </Provider>
);
