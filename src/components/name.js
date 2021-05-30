import React from "react";

const inputStyle = {
  width: "67%",
};

const Name = ({ setTwitterName }) => (
  <section>
    <h2>Nitter by Twitter Name</h2>
    <p>
      Enter a Twitter username press "GO" to be redirected to a nitter instance
      serving that profile.
    </p>
    <p>
      <input
        type="text"
        name="name"
        id="name"
        style={inputStyle}
        placeholder="Twitter Name"
        onChange={e => setTwitterName(e.target.value)}
      />
      <button id="nameShowNameList">LIST</button>
      <button id="nameGoRandom">RANDOM</button>
    </p>
  </section>
);

export default Name;
