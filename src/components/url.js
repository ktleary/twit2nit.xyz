import React, { useEffect, useState } from "react";
import List from "./list";
import {
  buildUrls,
  feelingLucky,
  getPathname,
  isValidUrl,
  removeLeadingSlash,
} from "../util";

const inputStyle = {
  width: "67%",
};

const Url = ({ instances }) => {
  const [twitterUrl, setTwitterUrl] = useState("");
  const [name, setName] = useState("");
  const [instanceLinks, setInstanceLinks] = useState([]);
  const [showList, setShowList] = useState(false);

  const disabledShowGo = !name;
  const disabledClear = !twitterUrl;

  useEffect(() => {
    if (twitterUrl && isValidUrl(twitterUrl)) {
      const pathname = removeLeadingSlash(getPathname(twitterUrl));
      setName(pathname);
    } else {
      setName("");
    }
  }, [twitterUrl]);

  useEffect(() => {
    if (instances && name) {
      setInstanceLinks(buildUrls(instances, name));
    }
  }, [instances, name]);

  return (
    <section>
      <h2>Nitter by Twitter URL</h2>
      <p>
        <input
          type="text"
          name="urlName"
          id="urlName"
          style={inputStyle}
          placeholder="Full URL"
          value={twitterUrl}
          onChange={e => setTwitterUrl(e.target.value)}
        />
        <button
          id="urlShowList"
          disabled={disabledShowGo}
          onClick={() => setShowList(!showList)}
        >
          LIST
        </button>
        <button
          id="urlGoRandom"
          disabled={disabledShowGo}
          onClick={() => feelingLucky(instanceLinks)}
        >
          GO RANDOM!
        </button>
        <button
          id="urlClear"
          disabled={disabledClear}
          onClick={() => setTwitterUrl("")}
        >
          CLEAR
        </button>
      </p>
      {showList && !disabledShowGo && <List instanceLinks={instanceLinks} />}
    </section>
  );
};

export default Url;
