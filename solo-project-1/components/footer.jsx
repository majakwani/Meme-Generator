import React from 'react'
import twitter from '../src/Twitter.png'
import facebook from '../src/Facebook.png'
import insta from '../src/Instagram.png'
import github from '../src/GitHub.png'



export function Footer(){
    return(
        <section className='footer'>
            <img src= {twitter} alt="" />
            <img src= {facebook} alt="" />
            <img src= {insta} alt="" />
            <img src= {github} alt="" />
        </section>
    )
}