/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */

import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Form";

function InputSuggest({
  value,
  placeholder,
  required,
  onChange,
  onSelect,
  onSelectOther,
  onFetchList,
}) {
  const [showSuggest, setShowSuggest] = useState(false);
  const [list, setList] = useState([]);

  const _onChange = async (e) => {
    // eslint-disable-next-line no-debugger
    debugger;
    setShowSuggest(true);
    onChange(e);
    const res = await onFetchList();
    setList(res);
  };

  const _onSelect = (item) => {
    // eslint-disable-next-line no-debugger
    debugger;
    onSelect(item);
    setShowSuggest(false);
  };

  const _onSelectOther = () => {
    // eslint-disable-next-line no-debugger
    debugger;
    onSelectOther();
    setShowSuggest(false);
  };

  return (
    <div>
      <Input
        value=""
        onChange={_onChange}
        placeholder={placeholder}
        required={required}
      />
      {/* {showSuggest && (
        <ul className="suggest-wrapper border-solid border border-gray-500 overflow-auto h-80">
          {list.map((item) => (
            <li key={item.id} className="title-suggest-list">
              <button
                type="submit"
                onClick={() => _onSelect(item)}
                className="hover:bg-red-100 flex justify-start items-center w-full"
              >
                {item.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                    alt="item"
                    className="mx-5 w-14"
                  />
                )}
                {item.character}
              </button>
            </li>
          ))}
          <li>
            <button
              type="submit"
              onClick={_onSelectOther}
              className="hover:bg-red-100 flex justify-start items-center w-full"
            >
              <p>other than above</p>
            </button>
          </li>
        </ul>
      )} */}
    </div>
  );
}

InputSuggest.propTypes = {
  value: PropTypes.string,
  // value: PropTypes.objectOf(PropTypes.any),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  onSelectOther: PropTypes.func,
  onFetchList: PropTypes.func,
};

export default InputSuggest;
