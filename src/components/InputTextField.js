import React from 'react';
import PropTypes from 'prop-types';

const CustomTextField = ({ id, label, value, errorMessage, ...props }) => {
  return (
    <div class="form-group">
      <label>{label}</label>
      <input
        class="form-control"
        required
        type="text"
        error={!!errorMessage}
        id={id}
        name={id}
        value={value}
        fullWidth
        variant="outlined"
        helperText={errorMessage}
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
