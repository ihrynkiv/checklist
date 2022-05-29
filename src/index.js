import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './dark.css';
import App from './App';
import {CHECK_LIST} from "./constants";
import ThemeContextWrapper from "./components/ThemeContextWrapper";

ReactDOM.render(
    <ThemeContextWrapper>
      <React.StrictMode>
        <App tasks={CHECK_LIST} />
      </React.StrictMode>
    </ThemeContextWrapper>,
  document.getElementById('root')
);
