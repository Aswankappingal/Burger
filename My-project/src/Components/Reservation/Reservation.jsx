import React from 'react'
import './Reservation.scss'


const Reservation = () => {
    return (
        <div>
            <div className="reserv-main">

                <div className="reservation-form">
                    <h2>Make a Reservation</h2>
                    <form>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <input type="tel" name="phone" placeholder="Phone Number" required />
                    <input type="date" name="date" required />
                    <input type="time" name="time" required />
                    <textarea name="message" placeholder="Additional Message" rows="5"></textarea>
                    <button type="submit">Submit</button>
                    </form >

                </div>




            </div>

        </div>
    )
}

export default Reservation
