import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Description from "./components/description";
import Message from "./components/message";
import Name from "./components/name";
import Url from "./components/url";
import { MESSAGES } from "./constants";
import { getInstanceData } from "./services/data.service";

const App = () => {
  const [message, setMessage] = useState("");
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    async function retrieveInstances() {
      setMessage(MESSAGES.FETCHINGDATA);
      const instances = await getInstanceData();
      setInstances(instances);
      setMessage("");
    }
    retrieveInstances();
  }, []);



  return (
    <div>
      <Header />
      <Description />
      <Message message={message} />
      <Name instances={instances} />
      <Url instances={instances} />
    </div>
  );
};

export default App;
