import React from "react";

const messageStyle = {
  color: "#fff59d",
  fontSize: 20,
  fontWeight: "bold",
};

const Message = ({ message }) => <div style={messageStyle}>{message}</div>;

export default Message;
