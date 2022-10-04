import React from 'react';
import "../css/Footer.css"
import twitter from "../image/twitter.png"
import insta from "../image/insta.png"
import facebook from "../image/facebook.png"

const Footer = () => {
    return (
        <div className='footer-bg'>
            <div className="container text-white py-4">
                <div className="row mt-4">
                    <div className="col-md-4">
                        <h4 className='my-3'>About Post<span className='text-primary'>it</span>.</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                            Tincidunt id sem vel quis in turpis sit eget pellentesque. <br />
                            Nunc etiicies in rhoncus, rhoncus in arcu. Tincidunt <br />
                            neque fusce vitaenisi aliquet. que maeae tortoere <br />
                            necsem commodo ac.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4 className='my-3'>Quick Menu</h4>
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <ul class="list-unstyled">
                                        <li>Home</li>
                                        <li>Stories</li>
                                        <li>Trending Stories</li>
                                        <li>Popular Stories</li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul class="list-unstyled">
                                        <li>Sign Up</li>
                                        <li>Log In</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className='my-3'>Subscribe to our newsletter</h4>
                        <div class="mb-3 ston">
                            <input type="text" class="form-control my-input" placeholder="Email address" />
                            <button className="btn btn-primary my-btn">Subscribe <i class="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row border-top">
                    <div className="col-12 text-end mt-3">
                        <div className='text-white'><p className='me-5 d-inline'>Terms and Policy</p>
                        <img src={twitter} alt="logo" className='' />
                        <img src={facebook} alt="logo" className='mx-4' />
                        <img src={insta} alt="logo" className='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
