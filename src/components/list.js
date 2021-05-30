import React from "react";

const linkStyle = {
  color: "rgba(255, 255, 255, 0.76)",
  fontSize: 18,
  textDecoration: "none",
  width: "100%",
  hover: {
    color: "red",
  },
};

const linkContainerStyle = {
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  height: 24,
  margin: 0,
  padding: "12px 0 12px 0",
  width: "100%",
};

const id = `item-${Math.random()}`;

const List = ({ instanceLinks }) =>
  instanceLinks.map((link, i) => (
    <div key={`list-${id}-${i}`} style={linkContainerStyle}>
      <a href={link} style={linkStyle}>
        {link}
      </a>
    </div>
  ));

export default List;
