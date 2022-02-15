import React from "react";
import Input from "./Form";

const InputSuggest = ({
  value,
  placeholder,
  required,
  onChange,
  onSelect,
  onSelectOther,
  onFetchList,
}) => {
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

  const _onSelectOther = () => {
    onSelectOther();
    setShowSuggest(false);
  };

  return (
    <div>
      <Input
        value={value}
        onChange={_onChange}
        placeholder={placeholder}
        required={required}
      />
      {showSuggest && (
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
      )}
    </div>
  );
};

export default InputSuggest;
