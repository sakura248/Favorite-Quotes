import PropTypes from "prop-types";
import React from "react";

function TextField({ value, required, onChange, placeholder, labelName }) {
  return (
    <label
      htmlFor={labelName}
      className="font-bold mb-2 mt-4 flex flex-col w-full"
    >
      {labelName}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-2 border-solid border border-black focus:border-primary-orange"
        required={required}
        name={labelName}
      />
    </label>
  );
}

TextField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  labelName: PropTypes.string,
};

export default TextField;
