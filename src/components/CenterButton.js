import React from 'react';
import PropTypes from 'prop-types';

const CenterButton = ({ title, onClick, color = "primary" }) => {
  return (
      <button
        onClick={onClick}
        className={`btn btn-${color}`}
      >
        {title}
      </button>
  );
}

CenterButton.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};


export default CenterButton;
