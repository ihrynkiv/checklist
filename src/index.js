import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/checkbox.scss'
import './styles/buttons.scss'
import './styles/todo.scss'
import './styles/theme-toggle.scss'
import './styles/dark.scss';
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
