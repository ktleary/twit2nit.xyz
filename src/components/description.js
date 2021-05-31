import React from "react";

const Description = () => (
  <section>
    <p>
      Twit2Nit works by checking intances listed on the{" "}
      <a href="https://github.com/zedeus/nitter/wiki/Instances">
        github nitter instances
      </a>{" "}
      every five minutes to estimate their availability.
    </p>
    <p>
      Enter a Twitter Name or URL and press "LIST" to view an available instance
      list pre-populated with your name or "GO RANDOM!" to be automatically
      redirected to a random instance.
    </p>
    <p>
      Random is recommended to more evenly distribute the load across all
      available instances, though results are less reliable than selecting your
      favorite intance from the list, as some unstable instances sometimes
      experience uptime volatility in short periods of time.
    </p>
  </section>
);

export default Description;
