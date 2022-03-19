import React from "react";
import SubCategories from "../categories/subCategories/SubCategories";

function Sidebar(): JSX.Element {
  console.log("header rerendered");

  return (
    <div className={"sidebar"}>
      <h3>Kategorien</h3>

      <ul>
        <SubCategories />
      </ul>
    </div>
  );
}

export default Sidebar;
