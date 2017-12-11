import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Piece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }


  hoverActive = () => {
    this.setState({
      hovered: true,
    });
  }

  hoverInactive = () => {
    this.setState({
      hovered: false,
    });
  }

  render() {
    // TODO: pass in props
    const { move } = this.props;
    let hovered;
    if (this.state.hovered) {
      hovered = 'rgba(195, 195, 195, 0.6)';
    }

    return (
      <div
        className="slot board wrapper"
        onClick={() => console.log('hi')}
        style={{ background: hovered }}
        onMouseOver={this.hoverActive}
        onMouseLeave={this.hoverInactive}
      >
        {move}
      </div>
    );
  }
}

Piece.propTypes = {
  move: PropTypes.string.isRequired,
};

export default Piece;
