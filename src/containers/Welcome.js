import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

import components from '../components';
import { numPlayers } from '../actions';

const { Status } = components;

const Welcome = ({ numPlayers, numberOfPlayers }) => {
  const chooseNumberOfPlayers = (e) => {
    numPlayers(e.target.value);
  };

  return (
    <div className="welcome">
      <Status text="Welcome to Tic-Tac-Toe" />
      <Button.Group size="large">
        <Button
          color="youtube"
          value={1}
          onClick={chooseNumberOfPlayers}
        >1 Player
        </Button>
        <Button.Or />
        <Button
          color="youtube"
          disabled={numberOfPlayers === '1'}
          value={2}
          onClick={chooseNumberOfPlayers}
        >2 Players
        </Button>
      </Button.Group>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  numberOfPlayers: state.numberOfPlayers,
});

Welcome.propTypes = {
  numberOfPlayers: PropTypes.string.isRequired,
  numPlayers: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, {
  numPlayers,
})(Welcome);
