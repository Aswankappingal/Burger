import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div>

            <div className="whole">


                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="iconlogo.png" alt="Logo" />
                    </div>
                    <nav className="footer-links">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Menu</a>
                        <a href="#">Reservations</a>
                        <a href="#">Testimonials</a>
                        <a href="#">Gallery</a>
                        <a href="#">Contact</a>
                    </nav>
                    <div className="footer-social">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Footer
