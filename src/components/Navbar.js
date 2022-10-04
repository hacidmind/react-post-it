import React from 'react';
import postit1 from "../image/Postit1.png";
import { Link } from "react-router-dom";
import "../css/SignIn.css";


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
                                <Link className="nav-link text-dark" to="/signin" data-bs-toggle="modal" data-bs-target="#exampleModal">SignIn</Link>
                            </li>
                        </ul>
                        <div class="d-flex" role="search">
                            <Link to="/getstarted" class="btn btn-info text-white" type="submit">Get Started</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sign In Modal */}
            <div class="modal fade text-center signin" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header text-center border-0">
                            {/* <h1 class="modal-title fs-5 " id="exampleModalLabel">Welcome Back</h1> */}
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container signin">
                            <h1 className='fs-3 mb-5'>Welcome Back</h1>
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control border-0 border-bottom" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                                        <input type="password" class="form-control border-0 border-bottom" />
                                    </div>
                                    <div class="d-grid gap-2">
                                        <button class="btn text-white mt-4 cont2" type="button">Continue</button>
                                    </div>
                                </form>
                                <div>
                                    <p className='my-5'>No account? <span className='text-primary'>Sign Up</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
