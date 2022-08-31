import React from "react";
import image from '../src/image12.png'
import star from '../src/Star.png'

export function Card(){
    return (
        <div className="card">
            <img src= {image} className = "cardImage" />
            <p className="firstPara"><img src = {star} className = "star" /> <span className="span-one">5.0</span> (6) • USA</p>
            <p className="secondPara">
                Life lessons with Katie Zaferes
            </p>
            <p className="thirdPara">
                <span className="bold">From $136</span> / person
            </p>
        </div>
    )
}