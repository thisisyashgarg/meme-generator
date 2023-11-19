import React from "react";
import logo from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      {/* <h4 className="header--project">
        Created by <a href="https://linktr.ee/thisisyashgarg">Yash Garg</a>
      </h4> */}
    </header>
  );
}
