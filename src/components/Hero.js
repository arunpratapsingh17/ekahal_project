import React from 'react'
import "./Hero.css"
const Hero = ({children}) => {
    return (
        <div className="hero">
            <div className="banner">
                <h1 className="hero-title">We provide the best random data</h1>
                <p className="hero-subtitle">at the best random rate</p>
                {children}
            </div>
    </div>
    )
}

export default Hero
