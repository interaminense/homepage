import React from "react";
import AppContext from "../AppContext";
import { Language } from "../utils/constants";

const Header = () => {
  const { keyword, setKeyword } = React.useContext(AppContext);

  return (
    <div className="Header sticky">
      <input
        placeholder={Language.SearchByTags}
        className="Header__search-by-keyword"
        type="text"
        value={keyword}
        onChange={({ target: { value } }) => {
          setKeyword({ keyword: value });
        }}
      />
    </div>
  );
};

export default Header;
