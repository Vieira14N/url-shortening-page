import React from 'react'
import logo from '../images/logo.svg'
import '../styles/Header.css'

export default function Header() {

    function toggleMenu(){
        const menu = document.querySelector('.mobile-nav')
        menu.classList.toggle('active')
    }

    return (
        <header>
            <div className='logo-nav'>
                <a href='index.html'> <img src={logo} alt='logo' /> </a>
                <nav>
                    <ul>
                        <li>Features</li>
                        <li>Prices</li>
                        <li>Resources</li>
                    </ul>
                </nav>
            </div>
            <div className='login-nav'>
                <nav>
                    <ul>
                        <li>Login</li>
                        <li> <button>Sign Up</button> </li>
                    </ul>
                </nav>
            </div>

            <div className='hamburger-menu' onClick={toggleMenu}></div>

            <nav className='mobile-nav'>
                <ul>
                    <li>Features</li>
                    <li>Prices</li>
                    <li>Resources</li>
                    <li className='bar'></li>
                    <li>Login</li>
                    <li> <button>Sign Up</button> </li>
                </ul>
            </nav>

        </header>
    )
}
