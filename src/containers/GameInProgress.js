import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import components from '../components';
import {
  turnCount,
  gameOver,
  gameInProgress,
  newBoard,
  nextTurn,
} from '../actions';

const { Board, Status, Piece } = components;

class GameInProgress extends Component {
  constructor(props) {
    super(props);
    this.handleClickSlot = this.handleClickSlot.bind(this);
  }

  componentWillMount() {
    const { player1Name, player2Name, currTurn } = this.props;

    const inputs = [currTurn];
    inputs.push(currTurn === 'X' ? 'O' : 'X');

    const messageObj = {};
    messageObj[inputs[0]] = `${player1Name} - ${inputs[0]} : Pick an empty slot`;
    messageObj[inputs[1]] = `${player2Name} - ${inputs[1]} : Pick an empty slot`;

    this.setState({
      message: messageObj,
    });
  }

  handleMessage(currentTurn) {
    const { message } = this.state;
    return message[currentTurn];
  }

  availabeSlots(slots) {
    return slots.reduce((acc, slot, i) => {
      if (slot === '') {
        return [...acc, i];
      }
      return acc;
    }, []);
  }

  handleClickSlot(e) {
    const {
      turnCount,
      gameOver,
      gameInProgress,
      newBoard,
      nextTurn,
      board,
      currTurn,
      turnCountNum,
      isGameInProgress,
    } = this.props;
    // console.log(e.target);
  }

  render() {
    const {
      currTurn, board,
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
});

GameInProgress.propTypes = {
  player1Name: PropTypes.string.isRequired,
  player2Name: PropTypes.string.isRequired,
  currTurn: PropTypes.string.isRequired,
  board: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  turnCountNum: PropTypes.number.isRequired,
  isGameInProgress: PropTypes.bool.isRequired,
  turnCount: PropTypes.func.isRequired,
  gameOver: PropTypes.func.isRequired,
  gameInProgress: PropTypes.func.isRequired,
  newBoard: PropTypes.func.isRequired,
  nextTurn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  turnCount,
  gameOver,
  gameInProgress,
  newBoard,
  nextTurn,
})(GameInProgress);
