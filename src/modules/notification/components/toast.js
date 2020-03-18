import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './toast.css'

const Toast = ({ isSuccess, message, setClose,open }) => {

  useEffect(() => {
    setTimeout(() => setClose(), 4000)
  })

  return (
    open &&
    <div className="alert success alert-success">
      <input type="checkbox" id="alert1" />
      <span className="inner">
        {message}
      </span>
    </div>
  );
}

Toast.propTypes = {
  setClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

export default Toast;
