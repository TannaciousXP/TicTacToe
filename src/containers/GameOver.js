import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import components from '../components';

import {
  numPlayers,
  endGame,
  turnCount,
} from '../actions';

const { Board, Status, Piece } = components;

class GameOver extends Component {
  constructor(props) {
    super(props);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame() {
    const { numPlayers, endGame, turnCount } = this.props;
    numPlayers(-1);
    turnCount(0);
    endGame();
  }

  render() {
    const { winner, board } = this.props;
    const boardPieces = board.map((piece, i) => <Piece key={i} move={piece} value={i} />);
    return (
      <div className="board wrapper">
        <Status text={winner} />
        <Board pieces={boardPieces} width={`${(Math.sqrt(board.length) * 100) / 16}rem`} />
        <Button color="youtube" onClick={this.handleNewGame}>Play again?</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  winner: state.winner,
  board: state.board,
});

GameOver.propTypes = {
  winner: PropTypes.string.isRequired,
  board: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  numPlayers: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired,
  turnCount: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  numPlayers,
  endGame,
  turnCount,
})(GameOver);
