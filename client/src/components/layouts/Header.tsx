import React, { useContext } from "react";
import { AppContext } from "../../Context/Context";
import Category from "../categories/Category";

function Header() {
  const user = useContext(AppContext);

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
