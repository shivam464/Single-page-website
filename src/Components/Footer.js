import React from 'react'
import logo from '../images/logo.png'

import facebook from '../images/facebook-logo.png'
import instagram from '../images/instagram-logo.png'
import linkedin from '../images/linkedin-logo.png'
import twitter from '../images/twitter-logo.png'
import ScrollTop from './ScrollTop/ScrollTop'

const Footer = () => {
    return (
        <footer class="footer_section bg-color">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="Footer_div first_col">
                            <a href="/" class="logo"><img src={logo} alt="logo" /></a>
                            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                            <ul class="social_link">
                                <li>
                                    <a  target="_blank" rel="noreferrer" href="/#"><img src={facebook}/></a>
                                </li>
                                <li>
                                    <a  target="_blank" rel="noreferrer" href="/#"><img src={instagram}/></a>
                                </li>
                                <li><a  target="_blank" rel="noreferrer" href="/#"><img src={linkedin}/></a></li>

                                <li><a  target="_blank" rel="noreferrer" href="/#"><img src={twitter}/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="Footer_div second_col">
                            <h3>Explore</h3>

                            <ul class="footer_links_list">
                                <li><a aria-current="page" class="" href="/">Home</a></li>
                                <li><a href="/about-us">About</a></li>
                                <li><a href="/case-studies">Case Studies</a></li>
                                <li><a href="/blog">Our Blog</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="Footer_div">
                            <h3>Resources</h3>
                            <ul class="footer_links_list">
                                <li><a href="/team">Our Scientists</a></li>
                                <li><a href="/services">Our Services</a></li>
                                <li><a href="/testimonials">Testimonials</a></li>
                                <li><a href="/services">SaaS Solutions</a></li>
                                <li><a href="/case-studies">Case Studies</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="Footer_div">
                            <h3>Address</h3>
                            <ul class="footer_links_list footer_addres_list">
                                <li><i class="fas fa-map-marker-alt"></i><span>175 5th Ave, New York, NY 10010,</span> <br /><span className="mx-4"> United States</span></li>
                                <li><i class="fas fa-phone-alt"></i><a href="#">+1 (123) 456 7890</a></li>
                                <li><i class="far fa-envelope"></i><a href="#">hello@rewy.com</a></li>
                                <li><i class="far fa-file-image"></i><a href="#">+55 785 4578964</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="copyright_div">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 copyright_col">
                            <p>Copyright @2021<strong>Rewy</strong> All rights reserved <a target="#" href="#" >EnvyTheme</a></p>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <ul className="terms_conditions">
                                <li className="privacy_policy"><a href="#">Privacy Policy</a></li>
                                <li className="line"></li>
                                <li><a  href="#">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollTop/>
        </footer>
    )
}

export default Footer
