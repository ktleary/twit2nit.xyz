import React from "react";

const Footer = () => (
  <div>
    <h2>About</h2>
    <p>
      nit2twit respects your privacy is a free and open source GPL-v3 licensed
      tool which uses no cookies or tracking. All URL transformations happen in
      the browser.
    </p>
    <p>
      Source code is available for both the{" "}
      <a href="https://git.sr.ht/~djlooop/twit2nit-client">client</a> and{" "}
      <a href="https://git.sr.ht/~djlooop/twit2nit">server</a> at sourcehut.
    </p>
    <p>
      <h2>Related Tools</h2>
      <ul>
        <li>
          twit2nit is inspired by <a href="https://twiiit.com">TWIIIT</a> from{" "}
          <a href="https://twiiit.com/mccrmx">Chris McCormick</a>
        </li>
        <li>
          <a href="https://invidi.link">invidi.link</a> creates Invidious links
          and code can also be found on{" "}
          <a href="https://sr.ht/~djlooop/invidi.link/">sourcehut</a>
        </li>
      </ul>
    </p>
    <p>
      For questions or comments, please contact{" "}
      <a href="https://sr.ht/~djlooop">djlooop</a>.
    </p>
  </div>
);

export default Footer;
