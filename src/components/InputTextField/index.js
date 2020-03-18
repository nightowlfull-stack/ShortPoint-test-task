import React from 'react';
import PropTypes from 'prop-types';
import './inputTextField.css'

const CustomTextField = ({ label, value, errorMessage, ...props }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className="form-control"
        type="text"
        value={value}
        variant="outlined"
        {...props} />
      {errorMessage && <span className='errorMsg'>{errorMessage}</span>}
    </div>
  );
}

CustomTextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CustomTextField;
