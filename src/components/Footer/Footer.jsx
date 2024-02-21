import React from 'react'

import "./Footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        CeyStore offers a shopping experience designed for fashion enthusiasts. Express your style with a wide collection of the latest trends in women's and men's clothing. Complete your look with unique accessories and stand out.
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex obcaecati beatae explicabo modi eligendi, necessitatibus ut repellat non eum voluptas tempore nesciunt reiciendis voluptatum quaerat, expedita sequi earum odit?
                    </span>
                </div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <span className='logo'>Ceystore</span>
                    <span className='copyright'> © Copyright 2024. All Rights Reserved</span>
                </div>
                <div className='right'>
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer