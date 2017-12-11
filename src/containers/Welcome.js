import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

import components from '../components';
import { numPlayers } from '../actions';

const { Status } = components;

const Welcome = () => {
  const handlePlayGame = (e) => {

  };

  const chooseNumberOfPlayers = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="welcome">
      <Status text="Welcome to Tic-Tac-Toe" />
      <Button.Group size="large">
        <Button color="youtube" value={1} onClick={chooseNumberOfPlayers}>1 Player</Button>
        <Button.Or />
        <Button color="youtube" value={2} onClick={chooseNumberOfPlayers}>2 Players</Button>
      </Button.Group>
    </div>
  );
};

export default Welcome;
