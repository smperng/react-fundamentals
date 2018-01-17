import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import registerServiceWorker from './registerServiceWorker';

import routes from './routes';
import './index.css';

ReactDOM.render(
  <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
