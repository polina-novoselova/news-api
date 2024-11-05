import React from "react";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} style={{ width: "290px", marginTop: "20px" }} alt="" />
      </div>
    </>
  );
}

export default Header;
