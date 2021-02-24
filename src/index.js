import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import Store from './Store'
import './mock/data'

import 'antd/dist/antd.css'

ReactDOM.render(
  <Provider store={ Store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
