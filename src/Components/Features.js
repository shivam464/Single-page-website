import React from 'react'
import FEATURES1 from '../images/FEATURES1.png'
import FEATURES2 from '../images/FEATURES2.png'
import FEATURES3 from '../images/FEATURES3.png'
import FEATURES4 from '../images/FEATURES4.png'
import FEATURES5 from '../images/FEATURES5.png'
import FEATURES6 from '../images/FEATURES6.png'
import star from '../images/star.png'

const Features = () => {
    return (
        <section class="features_section pt-100 pb-70 bg-f1f8fb">
            <div class="container features_container">
                <div class="title_section">
                    <span class="sub_title"><img src={star} alt="feature" />Our Features</span>
                    <h2>We’re Here To Help</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class=" features_div">
                            <div class="icon">
                                <img src={FEATURES1} alt="feature" />
                            </div>
                            <h3>Incredible Infrastructure</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class=" features_div">
                            <div class="icon">
                                <img src={FEATURES2} alt="feature" />
                            </div>
                            <h3>Email Notifications</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class=" features_div">
                            <div class="icon">
                                <img src={FEATURES3} alt="feature" />
                            </div>
                            <h3>Simple Dashboard</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class=" features_div">
                            <div class="icon">
                                <img src={FEATURES4} alt="feature" />
                            </div>
                            <h3>Information Retrieval</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class=" features_div">
                            <div class="icon">
                                <img src={FEATURES5} alt="feature" />
                            </div>
                            <h3>Drag and Drop</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class=" features_div" >
                            <div class="icon">
                                <img src={FEATURES6} alt="feature" />
                            </div>
                            <h3>Deadline Reminders</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
