import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactDOM, { render } from 'react-dom';

import containers from './containers';
import registerServiceWorker from './registerServiceWorker';

import './styles.css';

const { Welcome } = containers;

const App = () => (
  <div className="Main">
    <Welcome />
  </div>
);

render(<App />, document.getElementById('root'));

registerServiceWorker();
