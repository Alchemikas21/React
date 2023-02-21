import { useState } from "react";
import memesData from "../memesData";

export const Form = () => {
  // const [memeImage, setMemeImage] = useState("");

  const [allMemeImages, setAllMemeImages] = useState(memesData);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({...prevMeme,
      randomImage: prevMeme.randomImage = url

    }));
  };

  return (
    <>
      <div>
        <div className="form-input-container">
          <input type="text" />
          <input type="text" />
        </div>
        <button onClick={getMemeImage} className="form-button" type="submit">
          <img src="./images/get-image.png" alt="" />
        </button>
      </div>

      <div className="image-container">
        <img className="meme-image" src={meme.randomImage} />
      </div>
    </>
  );
};
