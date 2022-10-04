import React from 'react';
import postit1 from "../image/Postit1.png";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={postit1} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-dark" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/signin">SignIn</Link>
                            </li>
                        </ul>
                        <div class="d-flex" role="search">
                            <Link to="/getstarted" class="btn btn-info text-white" type="submit">Get Started</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
