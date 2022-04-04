import PropTypes from "prop-types";
import React from "react";

function AuthBtn({ btnValue }) {
  return (
    <button
      className="bg-stroke border border-stroke border-solid hover:bg-main text-white hover:text-black font-bold rounded-full font-bold mb-8 mt-6 py-3 px-20"
      type="submit"
    >
      {btnValue}
    </button>
  );
}

AuthBtn.propTypes = {
  btnValue: PropTypes.string.isRequired,
};

export default AuthBtn;
