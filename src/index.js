import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CHECK_LIST} from "./constants";

ReactDOM.render(
  <React.StrictMode>
    <App tasks={CHECK_LIST} />
  </React.StrictMode>,
  document.getElementById('root')
);
