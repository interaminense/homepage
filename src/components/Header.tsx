import React from "react";
import Filter from "./Filter";
import SearchInput from "./SearchInput";

const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <div className="Header">
      <Filter />
      <SearchInput />
    </div>
  );
};

export default Header;
