import React from "react";
import memesData from "./memsData";

export function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([...memesData.data.memes])

    function handleEvent(){
        let random = Math.floor(Math.random() * 100);
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: allMemeImages[random].url
            };
        })
    }

    return (
        <section className="form">
            <div className="inputs">
                <input type="text" placeholder="Upper Text" />
                <input type="text" placeholder="Lower Text" />
            </div>
            <div className="button">
                <button type="button" onClick={handleEvent}>Get a new meme image</button>
            </div>
            <img src = {meme.randomImage}/>
        </section>
    )
}