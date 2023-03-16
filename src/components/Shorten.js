import React from 'react'
import '../styles/shorten.css'

export default function Shorten() {
  return (
    <section className='shorten-section'>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Shorten a link here...'
        ></input>
        <button>Shorten it!</button>
      </div>
      <div className='link-container'>
        <p>https://www.google.com</p>
        <div>
          <p>https://auaauhuau.bit</p>
          <button>Copy</button>
        </div>
      </div>
      <div className='link-container'>
        <p>https://www.google.com</p>
        <div>
          <p>https://auaauhuau.bit</p>
          <button>Copy</button>
        </div>
      </div>
    </section>
  )
}
