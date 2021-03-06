import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Input, Select, Form } from 'semantic-ui-react';

import components from '../components';
import {
  numPlayers,
  namePlayer1,
  namePlayer2,
  gameInProgress,
  firstBoard,
  firstPick,
  startGame,
} from '../actions';

const { Status } = components;

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player2: '',
      board: '',
      firstMove: '',
    };
    this.onChangePlayerName = this.onChangePlayerName.bind(this);
    this.onChangeBoard = this.onChangeBoard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.chooseNumberOfPlayers = this.chooseNumberOfPlayers.bind(this);
    this.chooseFirstMove = this.chooseFirstMove.bind(this);
    this.GameStart = this.GameStart.bind(this);
  }


  onChangePlayerName(e, { name, value }) {
    this.setState({
      [name]: value,
    });
  }

  onChangeBoard(e, { value }) {
    this.setState({
      board: value,
    });
  }

  handleSubmit() {
    const {
      player1, player2, board, firstMove,
    } = this.state;
    const {
      numberOfPlayers,
      namePlayer1,
      namePlayer2,
      firstBoard,
      firstPick,
      gameInProgress,
      startGame,
    } = this.props;
    if (numberOfPlayers === 2 && player2 === '') {
      namePlayer2('Player 2');
    }

    if (numberOfPlayers === 2 && player2 !== '') {
      namePlayer2(player2);
    }

    if (numberOfPlayers === 1) {
      namePlayer2('Computer');
    }

    namePlayer1(player1);
    firstBoard(board);
    firstPick(firstMove);
    gameInProgress();
    startGame();
  }

  chooseNumberOfPlayers(e) {
    const { numPlayers } = this.props;
    numPlayers(e.target.value);
  }

  chooseFirstMove(e, { value }) {
    this.setState({
      firstMove: value,
    });
  }

  GameStart() {
    const { player1, player2 } = this.state;
    const options = [
      { key: '3', text: '3x3', value: '3' },
      { key: '4', text: '4x4', value: '4' },
      { key: '5', text: '5x5', value: '5' },
    ];

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            control={Input}
            name="player1"
            value={player1}
            label="Player 1 name"
            placeholder="Type in Player1 name"
            onChange={this.onChangePlayerName}
          />
          {
            this.props.numberOfPlayers === 2 ?
              <Form.Input
                control={Input}
                name="player2"
                value={player2}
                label="Player 2 name"
                placeholder="Type in Player2 name"
                onChange={this.onChangePlayerName}
              /> :
              null
          }
          <Form.Field
            control={Select}
            label="Size Board"
            options={options}
            placeholder="Pick a size board"
            onChange={this.onChangeBoard}
          />
        </Form.Group>
        <Status text="Player 1 choose between X or O" />
        <Form.Group widths="equal">
          <Form.Button
            color="instagram"
            value="X"
            content="X"
            onClick={this.chooseFirstMove}
            disabled={this.state.firstMove !== ''}
          />
          <Form.Button
            color="instagram"
            value="O"
            content="O"
            onClick={this.chooseFirstMove}
            disabled={this.state.firstMove !== ''}
          />
        </Form.Group>
        <Form.Button color="youtube" content="Begin Game!" />
      </Form>
    );
  }

  render() {
    const { chooseNumberOfPlayers, GameStart } = this;
    const { numberOfPlayers } = this.props;

    return (
      <div>
        <Status text="Welcome to Tic-Tac-Toe" />
        <Button.Group size="large">
          <Button
            color="youtube"
            value={1}
            disabled={numberOfPlayers !== -1}
            onClick={chooseNumberOfPlayers}
          >1 Player
          </Button>
          <Button.Or />
          <Button
            color="youtube"
            disabled={numberOfPlayers !== -1}
            value={2}
            onClick={chooseNumberOfPlayers}
          >2 Players
          </Button>
        </Button.Group>
        {
          numberOfPlayers !== -1 ?
            <Status text={`${numberOfPlayers} player(s) selected`} /> :
            null
        }
        {
          numberOfPlayers !== -1 ? <GameStart /> : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  numberOfPlayers: state.numberOfPlayers,
});

Welcome.propTypes = {
  numberOfPlayers: PropTypes.number.isRequired,
  namePlayer1: PropTypes.func.isRequired,
  namePlayer2: PropTypes.func.isRequired,
  gameInProgress: PropTypes.func.isRequired,
  firstBoard: PropTypes.func.isRequired,
  firstPick: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  numPlayers: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, {
  numPlayers,
  namePlayer1,
  namePlayer2,
  gameInProgress,
  firstBoard,
  firstPick,
  startGame,
})(Welcome);
