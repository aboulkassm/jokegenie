import React from "react"
import logo from "../logo.png"; 

export default function Header() {
    return (
        <header className="header">
            <img 
                src={logo} 
                className="header--image"
                alt="Logo"  
            />
            <h2 className="header--title">JokeGenie</h2>
            <h4 className="header--project">Aboulkassm</h4>
        </header>
    )
}
