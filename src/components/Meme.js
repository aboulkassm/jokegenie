import React, { useEffect, useRef } from "react";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemes, setAllMemes] = React.useState([]);

  const memeTopTextRef = useRef(null);
  const memeBottomTextRef = useRef(null);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  useEffect(() => {
    function fitTextInImage() {
      const memeTopText = memeTopTextRef.current;
      const memeBottomText = memeBottomTextRef.current;
      const memeImage = memeTopText.parentNode.querySelector(".meme--image");

      const memeTopTextWidth = memeTopText.offsetWidth;
      const memeBottomTextWidth = memeBottomText.offsetWidth;
      const memeImageWidth = memeImage.offsetWidth;

      const scaleTop = memeImageWidth / memeTopTextWidth;
      const scaleBottom = memeImageWidth / memeBottomTextWidth;

      memeTopText.style.transform = `scale(${scaleTop})`;
      memeBottomText.style.transform = `scale(${scaleBottom}) translate(0, 50%)`; // Adjusting the bottom position
    }

    fitTextInImage();
    window.addEventListener("resize", fitTextInImage);
    return () => {
      window.removeEventListener("resize", fitTextInImage);
    };
  }, [meme.randomImage]);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img
          src={meme.randomImage}
          className="meme--image"
          alt="Meme"
        />
        <div className="meme--text top" ref={memeTopTextRef}>
          {meme.topText}
        </div>
        <div className="meme--text bottom" ref={memeBottomTextRef}>
          {meme.bottomText}
        </div>
      </div>
    </main>
  );
};

export default Meme;
