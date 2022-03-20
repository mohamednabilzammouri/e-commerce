import React from "react";
import { memo } from "react";
import { SubCategories } from "../../categories/subCategories/SubCategories";
import { MySideBar } from "./SideBarStyle";
function Sidebar(): JSX.Element {
  console.log("header rerendered");

  return (
    <MySideBar>
      <SubCategories />
    </MySideBar>
  );
}

export default memo(Sidebar);
