import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Description from "./components/description";
import Message from "./components/message";
import Name from "./components/name";
import Url from "./components/url";
import List from "./components/list";
import { isValidUrl } from "./util";
import { MESSAGES } from "./constants";
import { getInstanceData } from "./services/data.service";

const App = () => {
  const [twitterName, setTwitterName] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [handle, setHandle] = useState("");
  const [showList, setShowList] = useState(false);
  const [links, setLinks] = useState([]);
  const validUrl = isValidUrl(twitterUrl);
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

  useEffect(() => {}, [instances]);

  return (
    <div>
      <Header />
      <Description />
      <Message message={message} />
      <div>{twitterName}</div>
      <div>{twitterUrl}</div>
      <Name
        setTwitterName={setTwitterName}
        twitterName={twitterName}
        setShowList={setShowList}
        showList={showList}
      />
      <Url
        setTwitterUrl={setTwitterUrl}
        twitterUrl={twitterUrl}
        setShowList={setShowList}
        showList={showList}
        validUrl={validUrl}
      />
      {showList && <List />}
    </div>
  );
};

export default App;
