import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/checkbox.scss'
import './styles/buttons.scss'
import './styles/todo.scss'
import './styles/navigation.scss'
import './styles/theme-toggle.scss'
import './styles/dark.scss';
import App from './App';
import {CHECK_LIST} from "./constants";
import ThemeContextWrapper from "./components/ThemeContextWrapper";
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
    <ThemeContextWrapper>
      <React.StrictMode>
          <BrowserRouter>
              <App tasks={CHECK_LIST} />
          </BrowserRouter>
      </React.StrictMode>
    </ThemeContextWrapper>,
  document.getElementById('root')
);
