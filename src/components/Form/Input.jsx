/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

function Input({ value, required, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="p-2 border-solid border border-black focus:border-primary-orange"
      required={required}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string,
  // value: PropTypes.objectOf(PropTypes.any),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Input;
