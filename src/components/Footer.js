import React from 'react'
import '../styles/footer.css'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

export default function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <img className='logo' src={logo} alt='logo'></img>
                <div className='footer-info'>
                    <ul>
                        <li> <h3>Features</h3> </li>
                        <li> <a href='#'> Link Shortening </a> </li>
                        <li> <a href='#'> Branded Links </a> </li>
                        <li> <a href='#'> Analytics </a> </li>
                    </ul>
                    <ul>
                        <li> <h3>Resources</h3> </li>
                        <li> <a href='#'> Blog </a> </li>
                        <li> <a href='#'> Developers </a> </li>
                        <li> <a href='#'> Support </a> </li>
                    </ul>
                    <ul>
                        <li> <h3>Company</h3> </li>
                        <li> <a href='#'> About </a> </li>
                        <li> <a href='#'> Our Team </a> </li>
                        <li> <a href='#'> Careers </a> </li>
                        <li> <a href='#'> Contact </a> </li>
                    </ul>
                    <img src={facebook} alt='facebook' ></img>
                    <img src={twitter} alt='twitter' ></img>
                    <img src={pinterest} alt='pinterest' ></img>
                    <img src={instagram} alt='instagram' ></img>
                </div>
            </div>
        </footer>
    )
}
