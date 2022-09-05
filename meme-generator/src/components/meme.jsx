import React from "react";

export function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleEvent(){
        let random = Math.floor(Math.random() * 100);
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: allMemes[random].url
            };
        })
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }
     
    return (
        <section className="form">
            <div className="inputs">
                <input type="text" placeholder="Upper Text" name = "topText" value = {meme.topText} onChange = {handleChange} />
                <input type="text" placeholder="Lower Text" name = "bottomText" value = {meme.bottomText} onChange = {handleChange} />
            </div>
            <div className="button">
                <button type="button" onClick={handleEvent}>Get a new meme image</button>
            </div>
            <div className="imgDiv">
                <h2 className="top Text">{meme.topText}</h2>
                <h2 className="bottom Text">{meme.bottomText}</h2>
            <img src = {meme.randomImage}/>
            </div>
        </section>
    )
}