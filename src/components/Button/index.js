import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, onClick, color = "primary" }) => {
  return (
      <button
        onClick={onClick}
        className={`btn btn-${color}`}
      >
        {title}
      </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
