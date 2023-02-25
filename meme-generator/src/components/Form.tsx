import { useState } from "react";
import React from "react";

export const Form = () => {
  const [meme, setMeme] = useState({
    topText: "one  does not simply",
    bottomText: "walk into mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState<any[]>([]);

  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
        
    }
    getMemes()
    
    return () => {
        //clean-up function, used if components leave memory leaks
    }
}, [])// dependency array, indicating react, when to run use-effect function

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setMeme((prevMemeData) => ({
      ...prevMemeData,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="form-input-container">
        <input
          type="text"
          placeholder="Top text"
          className="form-input"
          onChange={handleChange}
          value={meme.topText}
          name="topText"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form-input"
          onChange={handleChange}
          value={meme.bottomText}
          name="bottomText"
        />
      </div>
      <button className="form-button" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>
      <div className="image-container">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};
