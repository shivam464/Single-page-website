import React from 'react'
import star from '../images/star.png'
import design_img from '../images/design_img.png'
const Design = () => {
    return (
        <div class="design_section">
            <div class="container-fluid">
                <div class="row ">
                    <div class="col-lg-6 col-md-12 order-5">
                        <div class="hosting_content design_content">
                            <div class="content ">
                                <span class="star_img"><img src={star} alt="icon" /> Services</span>
                                <h2>Design &amp; Development</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <ul class=" design_ul hosting_list ">
                                    <li><i class="far fa-check-square"></i>Responsive Design</li>
                                    <li><i class="far fa-check-square"></i>React Development</li>
                                    <li><i class="far fa-check-square"></i>Apps Development</li>
                                    <li><i class="far fa-check-square"></i>Laravel Development</li>
                                    <li><i class="far fa-check-square"></i>UX/UI Design</li>
                                    <li><i class="far fa-check-square"></i>E-commerce Design</li>
                                    <li><i class="far fa-check-square"></i>Web Design</li>
                                    <li><i class="far fa-check-square"></i>Print Ready Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 order-1">
                        <div class="hosting_img"><img src={design_img} alt="service" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design
