import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";

const options = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "popular", label: "Popular" },
];

function Sort({ onChange }) {
  return (
    <div className="w-60 ml-6">
      <Select
        onChange={onChange}
        name="quote-sort"
        placeholder="Sort"
        // className="w-full bg-black text-white p-3 border border-black hover:bg-main hover:text-black cursor-pointer"
        options={options}
      />
    </div>
  );
}

Sort.propTypes = {
  onChange: PropTypes.func,
};

export default Sort;
