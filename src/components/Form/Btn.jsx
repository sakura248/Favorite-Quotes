import PropTypes from "prop-types";
import React from "react";

function Btn({ btnValue }) {
  return (
    <button
      type="submit"
      className="bg-stroke border border-stroke border-solid hover:bg-main text-white hover:text-black font-bold rounded-full font-bold mb-8 mt-6 py-3 px-20"
    >
      {btnValue}
    </button>
  );
}

Btn.propTypes = {
  btnValue: PropTypes.string.isRequired,
};

export default Btn;
