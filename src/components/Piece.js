import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Piece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
    this.hoverActive = this.hoverActive.bind(this);
    this.hoverInactive = this.hoverInactive.bind(this);
  }

  hoverActive() {
    this.setState({
      hovered: true,
    });
  }

  hoverInactive() {
    this.setState({
      hovered: false,
    });
  }

  render() {
    const { move, handleClick, value } = this.props;
    let hovered;
    if (this.state.hovered) {
      hovered = 'rgba(195, 195, 195, 0.6)';
    }

    return (
      <div
        value={value}
        className="slot board wrapper"
        onClick={move === '' ? handleClick : null}
        style={{ background: hovered }}
        onMouseOver={this.hoverActive}
        onMouseLeave={this.hoverInactive}
      >{move}
      </div>
    );
  }
}

Piece.propTypes = {
  move: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  value: PropTypes.number.isRequired,
};

export default Piece;
