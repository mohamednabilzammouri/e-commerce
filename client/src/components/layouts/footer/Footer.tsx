import React from "react";
import { memo } from "react";
import { StyledFooter } from "./FooterStyle";

function Footer(): JSX.Element {
  console.log("footer rerendered");

  return (
    <StyledFooter>
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
      Versandkosten.
    </StyledFooter>
  );
}
//using memo to avoid useless rerenders
export default memo(Footer);
