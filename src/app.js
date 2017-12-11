import React from 'react';
import { connect } from 'react-redux';

import containers from './containers';

import './styles.css';

const { Welcome, GameInProgress } = containers;


const App = ({ isGameInProgress }) => (

  <div className="Main">
    {
      !isGameInProgress ? <Welcome /> : <GameInProgress />
    }
  </div>

);

const mapStateToProps = state => ({
  isGameInProgress: state.isGameInProgress,
});

export default connect(mapStateToProps)(App);
