import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Theme } from './context/ThemeStyles';

import './index.css';

ReactDOM.render(
  <Theme>
    <App/>
  </Theme>,
  document.getElementById('root')
);
