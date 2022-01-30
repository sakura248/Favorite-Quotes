import React from "react";

function Filter() {
  return (
    <div className="w-60">
      <select
        name="quote-sort"
        placeholder="Sort"
        className="w-full bg-black text-white p-3 border-b border-black"
      >
        <option value="1">Newest</option>
        <option value="2">Oldest</option>
        <option value="3">Popular</option>
      </select>
    </div>
  );
}

export default Filter;
