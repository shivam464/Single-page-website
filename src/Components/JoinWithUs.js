import React from 'react'
import join_project from '../images/join_project.png'
import side_img from '../images/side_img.png'
import internet from '../images/internet.png'
const JoinWithUs = () => {
    return (
        <div class="join_project_section ptb-100">
            <div class="container">
                <div class="row  join_project_row">
                    <div class="col-lg-6 col-md-12">
                        <div class="join_project_img ">
                            <img className="img-fluid" src={join_project} alt="project" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="join_project_content ">
                            <h2>We Like to Start Your Project With Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <a class="btn button_started" href="#"><img src={internet} alt="web" />Get Started<span></span></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default JoinWithUs;
