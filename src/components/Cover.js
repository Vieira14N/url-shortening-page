import React from 'react'
import illustration from '../images/illustration-working.svg'
import "../styles/Cover.css"

export default function Cover() {
    return (
        <section>
            <div className='text'>
                <h1>More than just shorten links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </div>
            <img src={illustration} alt='working'></img>
        </section>
    )
}
