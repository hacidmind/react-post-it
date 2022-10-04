import React from 'react';
import "../css/Jumbotron.css";
import { Link } from "react-router-dom";
import img1 from "../image/img1.png";
import img2 from "../image/img2.png";
import img3 from "../image/img3.png";

const Jumbotron = () => {
    return (
        <div>

            <div className='bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className=''>Stay Curious.</h1>
                            <p className='jumbo-p'>Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur <br />
                                egestas massa velit aliquam. Molestim bibendum <br />
                                hnt ipsum orci, platea aliquam id ut. </p>
                            <Link to="/getstarted" class="btn btn-info text-white mt-3" type="submit">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Jumbotron */}

            {/* Section One */}
            <section className='my-5 '>
                <div className="container border">
                    <div className="row">
                        <div className="col-lg-4">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={img1} class="img-fluid pt-3" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title btn btn-warning text-white">Lifestyle</h5>
                                            <p class="card-text">The 20 Biggest Fashion Companies In Nigeria 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={img2} class="img-fluid pt-3" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title btn btn-success">Nature</h5>
                                            <p class="card-text">The 20 Biggest Agro Companies In Nigeria 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={img3} class="img-fluid pt-3" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title btn btn-primary">Technology</h5>
                                            <p class="card-text">The 20 Biggest Fintech Companies In Nigeria 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* End Of Section One */}
            <div className="container my-5 bg2">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className='mt-3'>Try Post<span className='text-primary'>it</span></h2>
                        <p className='my-3'>Do you want to write or discover stories from writers on any topic?</p>
                        <div class="input-group mb-5 w-50 m-auto">
                            <input type="text" class="form-control d-none d-md-block" placeholder="Enter Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span class="input-group-text bg-primary text-white " id="basic-addon2">Get Started</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Jumbotron;
