import './assets/styles.css'

import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import App from './AppWithRedux';
import App from './AppWithReduxAndPersist';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
