import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Input, Select, Form } from 'semantic-ui-react';

import components from '../components';
import { numPlayers } from '../actions';

const { Status } = components;

const options = [
  { key: '3', text: '3x3', value: '3' },
  { key: '4', text: '4x4', value: '4' },
  { key: '5', text: '5x5', value: '5' },
];

class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {
      player1: '',
      player2: '',
      board: '',
    }
  }
  
  chooseNumberOfPlayers = (e) => {
    this.props.numPlayers(e.target.value);
  };


  handleSubmit = (e) => {
    console.log(e.target);
  };

  onChangePlayerName = (e, {name, value}) => {
    this.setState({
      [name]: value
    });
  };

  onChangeBoard = (e, { value }) => {
    console.log(value);
    this.setState({
      board: value,
    });
  }

  PlayerNames = () => {
    const { player1, player2 } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
          control={Input} 
          name='player1' 
          value={player1} 
          label="Player1 name" 
          placeholder="Type in Player1 name"
          onChange={this.onChangePlayerName} />
          {
            this.props.numberOfPlayers === 2 ?
              <Form.Input 
              control={Input} 
              name='player2' 
              value={player2} 
              label="Player2 name" 
              placeholder="Type in Player2 name" 
              onChange={this.onChangePlayerName} /> :
              null
          }
          <Form.Field 
          control={Select} 
          label="Size Board" 
          options={options} 
          placeholder="Pick a size board" 
          onChange={this.onChangeBoard}/>
        </Form.Group>
        <Form.Button color="youtube" content="Begin Game!" />
      </Form>
    )
  }

  render() {
    const { chooseNumberOfPlayers, handleSubmit, PlayerNames } = this;
    const { numberOfPlayers, numPlayers } = this.props;

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
          numberOfPlayers !== -1 ? <PlayerNames /> : null
        }
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  numberOfPlayers: state.numberOfPlayers,
});

Welcome.propTypes = {
  numberOfPlayers: PropTypes.number.isRequired,
  numPlayers: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, {
  numPlayers,
})(Welcome);
