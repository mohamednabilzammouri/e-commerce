import React, { useContext } from "react";
import { SearchContext } from "../../Context/Context";
import Category from "../categories/Category";

function Header() {
  console.log("header rerendered");
  const setSearch = useContext(SearchContext);

  const handleSearch = function (searchKeyWord: any) {
    setSearch(searchKeyWord.target.value);
  };

  return (
    <>
      <div className={"header"}>
        <strong>home24</strong>
        <input placeholder={"Search"} onChange={handleSearch} />
        <Category />
      </div>
    </>
  );
}

export default Header;
