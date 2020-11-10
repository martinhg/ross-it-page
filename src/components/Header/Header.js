import React from 'react'

import MainVideo from '../../assets/video/header-video.mp4';

import './Header.scss';

const Header = () => {
    return (
        <header className="header" id="header-section">
            <div className="header_elements">
                <h1 className="header_title">Solutions</h1>
                <h2 className="header_subtitle">OUTSIDE <br/>THE BOX</h2>
                <button className="header_btn btn btn-primary btn-lg shadow-lg border rounded-pill border-dark">LET'S TALK</button>
            </div>
            <div className="header_overlay">
                <video className="header_video" autoPlay loop muted>
                    <source src={ MainVideo } type="video/mp4" />
                </video>
            </div>
            
            <div className="header_wave" style={{
                height: '150px', 
                overflow: 'hidden'
            }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                    <path d="M-0.27,97.20 C100.17,197.86 306.71,49.83 514.95,134.70 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none',fill: '#fff'}}>
                    </path>
                </svg>
            </div>
        </header>
    )
}

export default Header;
