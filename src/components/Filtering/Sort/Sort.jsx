import PropTypes from "prop-types";
import React from "react";

function Sort({ onChange }) {
  return (
    <div className="w-60 ml-6">
      <select
        onChange={onChange}
        name="quote-sort"
        placeholder="Sort"
        className="w-full bg-black text-white p-3 border border-black hover:bg-main hover:text-black cursor-pointer"
      >
        <option value="1">Newest</option>
        <option value="2">Oldest</option>
        <option value="3">Popular</option>
      </select>
    </div>
  );
}

Sort.propTypes = {
  onChange: PropTypes.func,
};

export default Sort;
