import React from "react";
import logo from '../../src/TrollFace.png'

export function Header(){
    return (
        <nav className="header">
            <div className="headerLeft">
                <p>
                    <img src= {logo}  className = "logo"/>
                <span className="headerLeftText">Meme Generator</span>
                </p>
            </div>
            <div className="headerRight">React Course - Project 3</div>
        </nav>
    )   
}