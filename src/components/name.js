import React, { useEffect, useState } from "react";
import List from "./list";

const inputStyle = {
  width: "67%",
};

const buildUrls = (instances, name) =>
  instances.reduce(
    (agg, instance) => [...agg, instance.concat("/").concat(name)],
    []
  );

const Name = ({ instances }) => {
  const [name, setName] = useState("");
  const [instanceLinks, setInstanceLinks] = useState([]);
  const [showList, setShowList] = useState(false);
  const disabled = !name || !instances.length;
  useEffect(() => {
    if (instances && name) {
      setInstanceLinks(buildUrls(instances, name));
    }
  }, [instances, name]);

  return (
    <section>
      <h2>Nitter by Twitter Name</h2>
      <p>
        Enter a Twitter username press "GO" to be redirected to a nitter
        instance serving that profile.
      </p>
      <p>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          style={inputStyle}
          placeholder="Twitter Name"
          onChange={e => setName(e.target.value)}
        />
        <button
          onClick={() => setShowList(!showList)}
          id="nameShowNameList"
          disabled={disabled}
        >
          LIST
        </button>
        <button id="nameGoRandom" disabled={disabled}>
          RANDOM
        </button>
        <button id="nameClear" disabled={disabled} onClick={() => setName("")}>
          CLEAR
        </button>
      </p>
      {showList && !disabled && <List instanceLinks={instanceLinks} />}
    </section>
  );
};

export default Name;
