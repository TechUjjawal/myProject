import React from 'react';
import e from './images/e.png';
import { NavLink } from 'react-router-dom';
const About=()=>{
    return(
        <div>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 orer-lg-1 d-flex flex-column justify-content-center">
                                <h1>
                                    Welcome to About Us<strong className="brandname"> StudyHere</strong>
                                </h1>
                                <h2 className="my-3 contentfont">
                                    We Are the Only one to change the world
                                </h2>
                                <div className="mt-3">
                                    <NavLink to="contact">
                                    <button type="button" class="btn btn-outline-primary">Contact Us</button>
                                    </NavLink>
                                </div>
                            </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={e} alt="imagehere" className="img-fluid pt-2 animated"/>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default About;