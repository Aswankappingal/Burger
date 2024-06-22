import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import About from '../About/About'

const Navbar = () => {
    return (
        <div>



            <div className="navmain">
                <div className="nav-left">
                    <img src="../../../public/iconlogo.png" alt="" />

                </div>
                <div className="nav-right">

                    <div className="contents">

                        <ul>
                            <li><a href="#home">Home</a></li>
                           <Link to={About}> 
                           <li><a href="About">About</a></li>
                           </Link>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#reservations">Reservations</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>




                    </div>

                </div>

            </div>


        </div>
    )
}

export default Navbar
