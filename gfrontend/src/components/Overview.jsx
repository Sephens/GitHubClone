import React from "react";
import list from "../list.json";

function Overview() {
  return (
    <div className="overview">
      <div className="overview-description">
        <p>Sephens / README.md</p>
        <h1>Hello, I am Steve</h1>
        <div className="line" />
        <h2>Jnr. Software Developer</h2>
        <p>I really love to code in React, HTML, CSS, Js, Python</p>
      </div>

      <div className="repos">
        <div className="repos-title">
          <h2>Popular Repositories</h2>
        </div>

        <div className="repos-container">
          {list.map((repo, index) => (
            <div className="repos-box" key={index}>
              <div className="repos-top">
                <h3>{repo.repo}</h3>
                <p>{repo.status}</p>
              </div>
              <div className="repos-bottom">
              <p>{repo.stack}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
