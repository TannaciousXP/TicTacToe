import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

import { Status } from '../components';


const Welcome = () => {
  const handlePlayGame = (e) => {

  };

  const chooseNumberOfPlayers = (e) => {

  };

  return (
    <div className="welcome">
      <Status text="Welcome to Tic-Tac-Toe" />
      <Button.Group size="large">
        <Button color="youtube">1 Player</Button>
        <Button.Or />
        <Button color="youtube">2 Players</Button>
      </Button.Group>
    </div>
  );
};

export default Welcome;
