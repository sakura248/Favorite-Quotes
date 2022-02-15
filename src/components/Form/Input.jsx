import React from "react";

const Input = ({ value, required, onChange, placeholder }) => {
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
};

export default Input
