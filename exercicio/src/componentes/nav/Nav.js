import React from 'react'
import logo from '../../imagens/RocketChat.png'
import Menu from './menu/Menu'
import './nav.css'

export default function Nav(props){
    return (
        <nav className="navbar">
                <div>
                    <img className="navbar-logo" src={logo} alt="Logotipo do RocketChat"/>
                </div>
                <Menu/>
        </nav>
    )
}


