import React from 'react'
import logo from '../images/logo.svg'
import '../styles/Header.css'

export default function Header() {
    return (
        <header>
            <div className='logo-nav'>
                <a href='index.html'> <img src={logo} alt='logo'/> </a>
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
        </header>
    )
}
