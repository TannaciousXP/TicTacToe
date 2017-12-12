import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import components from '../components';
import {
  turnCount,
  gameOver,
  newBoard,
  nextTurn,
  insertIntoSlot,
  saveWinner,
} from '../actions';

const { Board, Status, Piece } = components;

class GameInProgress extends Component {
  constructor(props) {
    super(props);
    this.handleClickSlot = this.handleClickSlot.bind(this);
    this.availabeSlots = this.availabeSlots.bind(this);
  }

  componentWillMount() {
    const { player1Name, player2Name, currTurn } = this.props;

    const inputs = [currTurn];
    inputs.push(currTurn === 'X' ? 'O' : 'X');

    const messageObj = {};
    messageObj[inputs[0]] = player1Name;
    messageObj[inputs[1]] = player2Name;

    this.setState({
      message: messageObj,
    });
  }

  componentWillUpdate(nextProps, nextState) {
    const {
      gameOver,
      saveWinner,
      nextTurn,
      currTurn,
      newBoard,
    } = this.props;

    const { message } = nextState;

    // console.log('INSIDDEEEEEEEEEEEEEEEEEEEEEEEE COMPONENT WILL UPDATE');
    // console.log(nextProps);
    // console.log(nextState);
    // return JSON.stringify(nextProps) !== JSON.stringify(this.props) ? true : null;

    if (nextProps.nextSteps.winningPlayer !== null) {
      saveWinner(`${message[currTurn]} - ${currTurn}: is the WINNER!`);
      gameOver();
    }

    if (nextProps.turnCountNum === nextProps.board.length && nextProps.nextSteps.winningPlayer === null) {
      saveWinner('It\'s a draw!');
      gameOver();
    }

    newBoard(nextProps.nextSteps.boardCopy);
    nextTurn(currTurn);
  }

  handleMessage(currentTurn) {
    const { message } = this.state;
    return `${message[currentTurn]} - ${currentTurn}: Pick an empty slot`;
  }

  availabeSlots(board) {
    const boardAvailableSlots = [];
    for (let i = 0; i < board.length; i += 1) {
      if (board[i] === '') {
        boardAvailableSlots.push(i);
      }
    }
    return boardAvailableSlots;
  }

  handleClickSlot(e) {
    const {
      board,
      currTurn,
      turnCountNum,
      turnCount,
      insertIntoSlot,
    } = this.props;

    turnCount(turnCountNum + 1);


    const availableSlotsArr = this.availabeSlots(board);
    const i = JSON.parse(e.target.getAttribute('value'));

    const canInsert = availableSlotsArr.indexOf(i) !== -1;

    if (canInsert) {
      console.log('inside can insert');
      insertIntoSlot(i, currTurn, board);
    }
  }

  render() {
    const {
      currTurn, board,
    } = this.props;
    // { console.log(board) ;}.
    // TODO: Add color by keeping track of index
    const boardPieces = board.map((piece, i) => (<Piece
      key={i}
      value={i}
      move={piece}
      handleClick={this.handleClickSlot}
    />));

    return (
      <div className="board wrapper">
        <Status text={this.handleMessage(currTurn)} />
        <Board pieces={boardPieces} width={`${(Math.sqrt(board.length) * 100) / 16}rem`} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  player1Name: state.player1Name,
  player2Name: state.player2Name,
  currTurn: state.currTurn,
  board: state.board,
  turnCountNum: state.turnCountNum,
  isGameInProgress: state.isGameInProgress,
  winner: state.winner,
  nextSteps: state.nextSteps,
});

GameInProgress.propTypes = {
  player1Name: PropTypes.string.isRequired,
  player2Name: PropTypes.string.isRequired,
  currTurn: PropTypes.string.isRequired,
  board: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  turnCountNum: PropTypes.number.isRequired,
  turnCount: PropTypes.func.isRequired,
  gameOver: PropTypes.func.isRequired,
  newBoard: PropTypes.func.isRequired,
  nextTurn: PropTypes.func.isRequired,
  insertIntoSlot: PropTypes.func.isRequired,
  saveWinner: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  turnCount,
  gameOver,
  newBoard,
  nextTurn,
  insertIntoSlot,
  saveWinner,
})(GameInProgress);
