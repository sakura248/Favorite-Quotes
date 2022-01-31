import React from "react";
import PropTypes from 'prop-types';

function Header({ header }) {
  return (
    <h1 className="border-b border-black text-5xl pb-7 mb-7">{header}</h1>
  )
};

Header.propTypes = {
  header: PropTypes.string.isRequired,
}

export default Header;
