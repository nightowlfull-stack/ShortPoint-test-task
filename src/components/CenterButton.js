import React from 'react';
import PropTypes from 'prop-types';

const CenterButton = ({ title, onClick, color = "primary" }) => {
  return (
    <div class="form-group text-center">
      <button
        onClick={onClick}
        class={`btn btn-${color}`}
      >
        {title}
      </button>
    </div >
  );
}

CenterButton.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};


export default CenterButton;
