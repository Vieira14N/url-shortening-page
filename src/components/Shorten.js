import React from 'react'
import '../styles/shorten.css'

export default function Shorten() {
  

  function createLink() {
    const container = document.querySelector('.link-container')
    const link = document.createElement('div')
    link.innerHTML = `<p>https://www.google.com</p>
                      <div>
                        <p>https://auaauhuau.bit</p>
                        <button>Copy</button>
                      </div>`
    link.classList.add('link')
    container.appendChild(link)
  }

  return (
    <section className='shorten-section'>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Shorten a link here...'
        ></input>
        <button onClick={createLink} >Shorten it!</button>
      </div>
      <div className='link-container'>

        <div className='link'>
          <p>https://www.google.com</p>
          <div>
            <p>https://auaauhuau.bit</p>
            <button>Copy</button>
          </div>
        </div>

      </div>
    </section>
  )
}
