import React from "react";

const linkStyle = {
  color: "rgba(255, 255, 255, 0.33)",
  textDecoration: "none"
};

const Header = () => (
  <h1>
    <a href="/" style={linkStyle}>
      Twit2Nit
    </a>
  </h1>
);

export default Header;
