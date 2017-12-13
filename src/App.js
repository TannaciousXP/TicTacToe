import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import containers from './containers';

import './styles.css';

const { Welcome, GameInProgress, GameOver } = containers;


const App = ({ isGameInProgress, isGameOn }) => (

  <div className="Main">
    {
      !isGameOn ? <Welcome /> : isGameInProgress ? <GameInProgress /> : <GameOver />
    }
  </div>

);

const mapStateToProps = state => ({
  isGameInProgress: state.isGameInProgress,
  numberOfPlayers: state.numberOfPlayers,
  isGameOn: state.isGameOn,
});

App.propTypes = {
  isGameInProgress: PropTypes.bool.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  isGameOn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
