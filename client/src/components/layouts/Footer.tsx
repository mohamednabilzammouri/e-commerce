import React from "react";

function Footer(): JSX.Element {
  console.log("header rerendered");

  return (
    <div
      className={"footer"}
      style={{
        position: "fixed",
        bottom: "0px",
        width: "100%",
        height: "2.5em",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "0",
      }}
    >
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
      Versandkosten.
    </div>
  );
}

export default Footer;
