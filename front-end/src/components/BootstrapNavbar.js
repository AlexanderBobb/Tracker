import React from 'react'
import Logo from '../logo.png'
import './styles.css'
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-light fixed-top">
                <a class="navbar-brand ml-auto" href="/">
                    <img src={Logo} width="180" height="40" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor : '#0e67b5'}}>
                    <span class="navbar-toggler-icon"></span>   
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav justify-content-around" style={{backgroundColor : '#0e67b5', width : '50%', position : 'right'}}>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/dashboard">Packages</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Header;