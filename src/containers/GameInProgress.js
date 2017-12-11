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
    this.handleClickSlot = this.handleClickSlot.bind(this);
  }

  handleClickSlot(e) {
    console.log(e.target);
  }

  render() {
    const {
      player1Name, player2Name, currTurn, board,
    } = this.props;
    // { console.log(board) ;}
    const boardPieces = board.map((piece, i) => (<Piece
      key={i}
      value={i}
      move={piece}
      handleClick={this.handleClickSlot}
    />));

    return (
      <div className="board wrapper">
        <Status text={`${player1Name} ${currTurn}: pick a slot`} />
        <Board pieces={boardPieces} width={`${(Math.sqrt(board.length) * 100) / 16}rem`} />
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
