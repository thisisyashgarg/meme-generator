import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [imageURL, setImageURL] = useState("");

  function logURL() {
    const memes = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memes.length);
    return memes[randomNumber].url;
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={() => setImageURL(logURL())}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={imageURL} />
    </main>
  );
}
