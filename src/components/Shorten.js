import React from 'react'
import '../styles/shorten.css'

export default function Shorten() {

  async function onFetch(url) {
    const response = await fetch(url)
    const json = await response.json()
    return json
  }

  function createLink() {
    const input = document.querySelector('input')
    const container = document.querySelector('.link-container')
    const link = document.createElement('div')
    const shortLink = onFetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
    shortLink.then(response => {
      link.innerHTML = `<p>${input.value}</p>
      <div>
         <p>${response.result.short_link}</p>
        <button>Copy</button>
      </div>`
    })
    link.classList.add('link')
    container.appendChild(link)

    const copyBtn = document.querySelectorAll('.link')

    copyBtn.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target.localName === "button") {
          const copyText = e.target.previousElementSibling.textContent
          navigator.clipboard.writeText(copyText)
          e.target.classList.add('active')
          e.target.innerHTML = 'Copied!'
        }
      })
    })
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
      <div className='link-container'></div>
    </section>
  )
}
