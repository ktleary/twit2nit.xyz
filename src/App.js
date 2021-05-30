import React, { useState } from "react";
import Header from "./components/header";
import Description from "./components/description";
import Name from "./components/name";
import Url from "./components/url";

const App = () => {
  const [twitterName, setTwitterName] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");

  return (
    <div>
      <Header />
      <Description />
      <div>{twitterName}</div>
      <div>{twitterUrl}</div>
      <Name setTwitterName={(twitterName, setTwitterName)} handleChange />
      <Url setTwitterUrl={(twitterUrl, setTwitterUrl)} />
    </div>
  );
};

export default App;
