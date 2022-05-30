import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import ThemeContextWrapper from "./components/ThemeContextWrapper";
import {CHECK_LIST} from "./constants";

import './styles/index.scss';
import './styles/checkbox.scss'
import './styles/buttons.scss'
import './styles/todo.scss'
import './styles/navbar.scss'
import './styles/navigation.scss'
import './styles/theme-toggle.scss'
import './styles/dark.scss';

if (!localStorage.getItem('defaultState')) {
    localStorage.setItem('defaultState', JSON.stringify(CHECK_LIST))
}

ReactDOM.render(
    <ThemeContextWrapper>
      <React.StrictMode>
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </React.StrictMode>
    </ThemeContextWrapper>,
  document.getElementById('root')
);
