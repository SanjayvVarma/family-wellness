import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <>
            <div className='header-div'>
                <h1>Family Wellness</h1>
                <p>MASSAGE THERAPY</p>
            </div>

            <div className='header'>
                <ul>
                    <li className='header-home'>HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>FAQ</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </>
    )
}

export default Header
