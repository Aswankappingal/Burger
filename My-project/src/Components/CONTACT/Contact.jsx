import React from 'react'
import './Contact.scss'

const Contact = () => {
    return (
        <div>
            <div className="mainerrr">
                <div className="Conatct">
                    <div className="contact-container">
                        <h2>Contact Us</h2>
                        <div className="contact-info">
                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>123 Main Street, City, Country</p>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-phone-alt"></i>
                                <p>+1 234 567 890</p>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <p>info@bergerhut.com</p>
                            </div>
                        </div>

                    </div>


                </div>


                {/* ////////just form //// */}


                <div className="contact-orooorororm">
                    
                <form className="contact-form">
                    <input type="text" name="name" placeholder="Your Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                </div>









                    </div>
            </div>
            )
}

            export default Contact
