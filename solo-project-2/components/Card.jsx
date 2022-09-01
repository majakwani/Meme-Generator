import React from "react";

export function Card(props){
    let cardText;
    if(props.data.openSpots === 0){
        cardText = "SOLD OUT"
    }
    else if (props.data.location === "Online"){
        cardText = "ONLINE"
    }

    return (
        <div className="card">
            {cardText && <div className="cardText">{cardText}</div>}
            <img src= {`../src/${props.data.coverImg}`} className = "cardImage" />
            <p className="firstPara"><img src = {props.star} className = "star" /> <span className="span-one">{props.data.stats.rating}</span> ({props.data.stats.reviewCount}) • {props.data.location}</p>
            <p className="secondPara">
                {props.data.title}
            </p>
            <p className="thirdPara">
                <span className="bold">{props.data.price}</span> /person
            </p>
        </div>
    )
}