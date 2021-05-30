import React from "react";

const List = ({ instanceLinks }) =>
  instanceLinks.map(link => <div>{link}</div>);

export default List;
