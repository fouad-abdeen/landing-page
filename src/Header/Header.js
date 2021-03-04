import React from "react";
import "./Header.scss";
import logo from "../assets/roundtrip-logo.jpg";

const Header = () => {
  return (
    <>
      <img alt="RoundTrip" src={logo} className="rounded-circle header-logo" />
    </>
  );
};

export default Header;
