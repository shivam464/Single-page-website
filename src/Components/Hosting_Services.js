import React from 'react'
import hosting_img from '../images/hosting-services.png';
import star from '../images/star.png';


const Hosting_Services = () => {
    return (

        <div class="hosting_div ">
            <div class="container-fluid">
                <div class="row ">
                    <div class="col-lg-6 col-md-12">
                        <div class="hosting_img"><img src={hosting_img} alt="service" /></div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="hosting_content">
                            <div class="content">
                                <span class="star_img"><img src={star} alt="icon" /> Services</span>
                                <h2>Cloud Hosting Services</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <div className="row">

                                    <ul class="hosting_list">
                                        <li><i class="far fa-check-square"></i>Cloud Databases</li>
                                        <li><i class="far fa-check-square"></i>Website Hosting</li>
                                        <li><i class="far fa-check-square"></i>File Storage</li>
                                        <li><i class="far fa-check-square"></i>Forex Trading</li>
                                        <li><i class="far fa-check-square"></i>File Backups</li>
                                        <li><i class="far fa-check-square"></i>Remote Desktop</li>
                                        <li><i class="far fa-check-square"></i>Email Servers</li>
                                        <li><i class="far fa-check-square"></i>Hybrid Cloud</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hosting_Services
