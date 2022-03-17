import React from "react";

function Footer() {
  console.log("header rerendered");

  return (
    <div className={"footer"}>
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
      Versandkosten.
    </div>
  );
}

export default Footer;
