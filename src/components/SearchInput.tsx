import React from "react";
import AppContext from "../AppContext";
import { Language } from "../utils/constants";

const SearchInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = () => {
  const { keyword, setKeyword } = React.useContext(AppContext);
  return (
    <input
      placeholder={Language.SearchByTags}
      className="Header__search-by-keyword"
      type="text"
      value={keyword}
      onChange={({ target: { value } }) => {
        setKeyword({ keyword: value });
      }}
    />
  );
};

export default SearchInput;
