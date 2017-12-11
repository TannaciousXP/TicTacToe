import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactDOM, { render } from 'react-dom';

import { Welcome } from './containers';

const App = () => {
  <div className='App'>
    <Welcome/>
  </div>
}

render (<App/>, document.getElementById('root'));
// import { connect } from 'react-redux';
// import containers
// import css for app.js