import React from "react";

const inputStyle = {
  width: "67%",
};

const Url = ({ twitterUrl, setTwitterUrl, validUrl }) => (
  <section>
    <h2>Nitter by Twitter URL</h2>
    <p>
      Enter a Twitter URL and press "LIST" to view an available instance list
      pre-populated with your name or "RANDOM" to be automatically redirected to
      a random instance serving that profile.
    </p>
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
      <button id="urlShowList" disabled={!validUrl}>
        LIST
      </button>
      <button id="urlGoRandom" disabled={!validUrl}>
        RANDOM
      </button>
    </p>
  </section>
);

export default Url;
