import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Layout} from './components';
import './styles.css';

ReactDOM.render(
  <Layout><App /></Layout>,
  document.getElementById('root')
);
