/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

function AuthInput({ errorMessage, labelName, type, name, onChange }) {
  return (
    <div>
      <label className="font-bold mb-2 mt-4 flex flex-col" htmlFor={name}>
        {labelName}
        {errorMessage && <p>something wrong</p>}
        <input
          className="border py-4 px-5 inline-block box-border border-solid border-black bg-transparent"
          type={type}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

AuthInput.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default AuthInput;
