import React from "react";

const linkStyle = {
  color: "rgba(255, 255, 255, 0.87)",
  textDecoration: "none"
};

const Header = () => (
  <h1>
    <a href="/" style={linkStyle}>
      twit2nit
    </a>
  </h1>
);

export default Header;
