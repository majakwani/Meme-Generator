import React from "react";
import picture from '../src/Group.png'

export function Hero(){
    return(
        <section className="Hero">
            <img src= {picture} className = "groupPicture" />
            <h1 className="heroHeading">Online Experiences</h1>
            <p className="heroPara">Join unique interactive activities led by one-of-a kind hosts -- all without leaving home.</p>
        </section>
    )
}