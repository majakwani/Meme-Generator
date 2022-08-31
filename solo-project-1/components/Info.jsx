import React from 'react'
import picture from '../src/image.png'
import email from '../src/Icon.png'
import linkedin from '../src/Vector.png'

export function Info(){
    return (
        <section className='info'>
            <div className='imageDiv'><img src={picture} className='picture'/></div>
            <div className='content'>
            <p className='name' >Jon Snow</p>
            <p className='position' >Front-end Developer</p>
            <p className='website' >jonsnow.website</p>
            </div>
            <div className='buttons'>
                <button type='button' className='email'>
                    <img src= {email} width = "12.8px" height="9.6px" className='logo'/>
                    <span>Email</span>
                </button>

                <button type='button' className='linkedin'>
                    <img src= {linkedin} width = "15px" height="15px" className='vector'/>
                    <span>LinkedIn</span>
                </button>
            </div>
        </section>
    )
}