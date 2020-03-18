import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({ value, title, errorMessage, onChange, options, ...props }) => {
  return (
    <div className="form-group">
      <label>{title}</label>
      <select
        value={value}
        onChange={onChange}
        className="form-control"
      >
        {options && options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

SelectField.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SelectField;
