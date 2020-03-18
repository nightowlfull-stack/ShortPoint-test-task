import React from 'react';
import PropTypes from 'prop-types';

const CustomTextField = ({ id, label, value, errorMessage, ...props }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className="form-control"
        type="text"
        placeholder={errorMessage ? errorMessage : ''}
        error={!!errorMessage}
        id={id}
        name={id}
        value={value}
        fullWidth
        variant="outlined"
        {...props} />
    </div>
  );
}

CustomTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CustomTextField;
