import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Piece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }


  hoverActive() {
    this.set({
      hovered: true,
    });
  }

  hoverInactive() {
    this.setState({
      hovered: false,
    });
  }

  render() {
    // TODO: pass in props
    const {} = this.props;
    let hovered;
    if (this.state.hovered || disable) {
      hovered = 'rgba(195, 195, 195, 0.6)';
    }

    return (
      <div
        className="piece flex-center"
        onClick={}
        style={{ background: hovered}}
        onMouseOver={this.hoverActive}
        onMouseLeave={this.hoverInactive}
       >
       {}
       </div>
    );
  }
}

Piece.propTypes = {

}

export default Piece;