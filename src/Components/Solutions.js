import React from 'react'
import star from "../images/star.png";
const Solutions = () => {
    return (
        <div>
            <section class="solutions_section">
                <div class="container ">
                    <div class="title_section header_sections">

                        <span class="sub_title"><img src={star} alt="star" />Our Solutions</span>
                        <h2 className="text-center">We Different From Others Should Choose Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-sm-6">
                            <div class="solutions_box">
                                <div class="icon"><i class="fas fa-rocket"></i></div>
                                <h3><a href="/service-details">Code Security</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                <a class="view_details" href="#">View Details</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="solutions_box">
                                <div class="icon"><i class="fas fa-laptop"></i></div>
                                <h3><a href="/service-details">Team Management</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                <a class="view_details" href="#">View Details</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                            <div class="solutions_box">
                                <div class="icon"><i class="fas fa-shopping-bag"></i></div>
                                <h3><a href="/service-details">Access Controlled</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                <a class="view_details" href="#">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Solutions
