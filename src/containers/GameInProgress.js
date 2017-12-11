import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import components from '../components';
// TODO: import actions

const { Board, Status, Piece } = components;

class GameInProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hold: '',
    };
  }


  render() {
    const {
      player1Name, player2Name, currTurn, board,
    } = this.props;

    return (
      <div className="board wrapper">
        <Status text="test" />
        <Board pieces={board} width={board.length * 100} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  player1Name: state.player1Name,
  player2Name: state.player2Name,
  currTurn: state.currTurn,
  board: state.board,
  turnCount: state.turnCount,
  isGameInProgress: state.isGameInProgress,
});

GameInProgress.propTypes = {
  player1Name: PropTypes.string.isRequired,
  player2Name: PropTypes.string.isRequired,
  currTurn: PropTypes.string.isRequired,
  board: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  turnCount: PropTypes.number.isRequired,
  isGameInProgress: PropTypes.bool.isRequired,


};

export default connect(mapStateToProps, {})(GameInProgress);
