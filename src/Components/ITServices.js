import React from 'react'
import banner from '../images/IT-banner.png'

const ITServices = () => {
    return (
        <div className="services">
            <div class="container services_section">

                <div class="row align-items-center ">
                    <div class="col-lg-6 col-md-12 ">
                        <div class="content_div">
                            <h1 class="fadeInLeft text-light" >Secure IT Solutions Services</h1>
                            <p class="fadeInLeft text-light" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div class="btn-box fadeInRight services_btn" >
                                <a class="btn  text-light" href="#"><i class="fas fa-arrow-right mx-2"></i>Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 " id="banner_img">
                        <div class="banner_img " >
                            <img src={banner} alt="banner" />

                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default ITServices
