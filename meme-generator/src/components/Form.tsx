import { useState } from "react";
import memesData from "../memesData";

export const Form = () => {
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");


  const getMemeImage = () => {
const memesArray = memesData.data.memes;
const randomNumber = Math.floor(Math.random() * memesArray.length)
const url = memesArray[randomNumber].url
  };

  getMemeImage();
  return (
    <div>
      <div className="form-input-container">
        <input type="text" />
        <input type="text" />
      </div>
      <button onClick={getMemeImage} className="form-button" type="submit">
        <img src="./images/get-image.png" alt="" />
      </button>
    </div>
  );
};
