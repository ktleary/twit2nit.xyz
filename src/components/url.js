import React from "react";

const Url = ({ twitterUrl, setTwitterUrl }) => (
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
        name="name"
        id="name"
        placeholder="URL"
        value={twitterUrl}
        onChange={e => setTwitterUrl(e.target.value)}
      />
      <button id="urlShowList">LIST</button>
      <button id="urlGoRandom">RANDOM</button>
    </p>
  </section>
);

export default Url;
