import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HostApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <HostApp />
  </BrowserRouter>
), document.getElementById('root'));

