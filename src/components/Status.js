import React from 'react';
import PropTypes from 'prop-types';

const Status = ({ text }) => (
  <h2 className="status">
    {text}
  </h2>
);

Status.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Status;

