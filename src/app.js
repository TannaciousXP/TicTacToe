import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import containers from './containers';

import './styles.css';

// TODO: Add game over
const { Welcome, GameInProgress } = containers;


const App = ({ isGameInProgress, numberOfPlayers }) => (

  <div className="Main">
    { // TODO: add gameover
      numberOfPlayers === -1 || !isGameInProgress ? <Welcome /> : isGameInProgress ? <GameInProgress /> : null
    }
  </div>

);

const mapStateToProps = state => ({
  isGameInProgress: state.isGameInProgress,
  numberOfPlayers: state.numberOfPlayers,
});

App.propTypes = {
  isGameInProgress: PropTypes.bool.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(App);
