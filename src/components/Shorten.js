import { useState, useEffect } from 'react'
import '../styles/shorten.css'

export default function Shorten() {

  const [shortLink, setShortLink] = useState([]);

  useEffect(() => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
      .then(response => response.json())
      .then(json => setShortLink(json))
  }, []);

  function createLink() {
    const shorten = shortLink.result.short_link
    const input = document.querySelector('input')
    const container = document.querySelector('.link-container')
    const link = document.createElement('div')
    link.innerHTML = `<p>${input.value}</p>
                      <div>
                        <p>${shorten}</p>
                        <button>Copy</button>
                      </div>`
    link.classList.add('link')
    container.appendChild(link)
  }

  return (
    <section className='shorten-section'>
      <div className='input-container'>
        <input
          className='input'
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
