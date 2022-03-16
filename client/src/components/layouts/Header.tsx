import React from "react";
import Category from "../categories/Category";

function Header() {
  return (
    <>
      <div className={"header"}>
        <strong>home24</strong>
        <input placeholder={"Search"} />
        <Category />
      </div>
    </>
  );
}

export default Header;
