import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="/appointment">Appointment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="#">Dental Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5  text-white" to="#">Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 text-white" to="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 text-white" to="#">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                </nav>
        </div>
    );
};

export default Navbar;