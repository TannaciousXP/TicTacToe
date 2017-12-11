import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ pieces, width }) => (
  <div className="board" style={{ width }}>
    {pieces.map(piece => piece)}
  </div>
);

Board.propTypes = {
  width: PropTypes.string.isRequired,
  pieces: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Board;
