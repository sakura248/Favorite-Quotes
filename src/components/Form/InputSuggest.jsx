import PropTypes from "prop-types";
import React, { useState } from "react";
import TextField from "./TextField";

function InputSuggest({
  value,
  placeholder,
  required,
  onChange,
  onSelect,
  onFetchList,
  isCharacter,
  labelName,
}) {
  const [showSuggest, setShowSuggest] = useState(false);
  const [list, setList] = useState([]);

  const _onChange = async (e) => {
    setShowSuggest(true);
    onChange(e);
    const res = await onFetchList();
    setList(res);
  };

  const _onSelect = (item) => {
    onSelect(item);
    setShowSuggest(false);
  };

  return (
    <>
      <TextField
        value={value}
        onChange={_onChange}
        placeholder={placeholder}
        required={required}
        labelName={labelName}
      />

      {showSuggest && list && (
        <ul className="suggest-wrapper border-solid border border-gray-500 overflow-auto h-80 w-full">
          {list.map(
            (item) =>
              !isCharacter ? (
                <li key={item.id} className="title-suggest-list">
                  <button
                    type="submit"
                    onClick={() => _onSelect(item)}
                    className="hover:bg-red-100 flex justify-start items-center w-full"
                  >
                    {item.poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                        alt="item"
                        className="mx-5 w-14"
                      />
                    )}
                    {item.name}
                    {item.origin_country.length > 0 &&
                      ` (${item.origin_country})`}
                    <span className="text-sm text-gray-500">
                      {item.first_air_date && item.first_air_date}
                    </span>
                  </button>
                </li>
              ) : (
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
              )

            //
          )}
        </ul>
      )}
    </>
  );
}

InputSuggest.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  onFetchList: PropTypes.func,
  isCharacter: PropTypes.bool.isRequired,
  labelName: PropTypes.string,
};

export default InputSuggest;
