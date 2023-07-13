import React from "react";

const Joke = ({seetup, punchline}) => (
  <div className="joke-panel">
    <div className="joke-setup">{seetup}</div>
    <div className="joke-punchline">{punchline}</div>
  </div>
);

export default Joke;
