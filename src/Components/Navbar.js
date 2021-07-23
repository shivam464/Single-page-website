import React from 'react'
import logo from "../images/logo.png";

const Navbar = () => {
    return (
        <div className="nav_bar bg-light">
            <nav class="navbar navbar-expand-lg navbar_section bg-light">
                <div class="container-fluid nav_container bg-light">
                    <a class="navbar-brand" href="#"><img src={logo} alt="loading" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto order_list " id="ul_section">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home
                                </a>
                                <ul class="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
                                    <div className="horizontal_line"></div>
                                    <li><a class="dropdown-item " href="#">IT Services</a></li>
                                    <li><a class="dropdown-item" href="#">SEO Agency</a></li>
                                    <li><a class="dropdown-item" href="#">Data Science ML Company</a></li>
                                    <li><a class="dropdown-item" href="#">Data Analytics & AI Startup</a></li>
                                    <li><a class="dropdown-item" href="#">Digital Marketing Agency</a></li>
                                    <li><a class="dropdown-item" href="#">Data Science Online Courses</a></li>
                                    <li><a class="dropdown-item" href="#">Big Data Analysis</a></li>
                                    <li><a class="dropdown-item" href="#">Data Analytics ML consulting</a></li>
                                    <li><a class="dropdown-item" href="#">Machine Learning AI Solutions</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="horizontal_line"></div>
                                    <li><a class="dropdown-item" href="#">About Us</a></li>
                                    <li><a class="dropdown-item" href="#">History</a></li>
                                    <li><a class="dropdown-item" href="#">Testimonials</a></li>
                                    <li><a class="dropdown-item" href="#">Team One</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="horizontal_line"></div>
                                    <li><a class="dropdown-item" href="#">Services</a></li>
                                    <li><a class="dropdown-item" href="#">Services Details</a></li>

                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Case Studies
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="horizontal_line"></div>
                                    <li><a class="dropdown-item" href="#">Case Studies</a></li>
                                    <li><a class="dropdown-item" href="#">Case Studies Details</a></li>

                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="horizontal_line"></div>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Courses
                                        </a>
                                        <ul class="dropdown-menu courses" aria-labelledby="navbarDropdown">
                                            <div className="horizontal_line"></div>
                                            <li><a class="dropdown-item" href="#">Courses</a></li>
                                            <li><a class="dropdown-item" href="#">Courses Details</a></li>

                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Events
                                        </a>
                                        <ul class="dropdown-menu events" aria-labelledby="navbarDropdown">
                                            <div className="horizontal_line"></div>
                                            <li><a class="dropdown-item" href="#">Events</a></li>
                                            <li><a class="dropdown-item" href="#">Events Details</a></li>

                                        </ul>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Contact</a></li>
                                    <li><a class="dropdown-item" href="#">Gallery</a></li>
                                    <li><a class="dropdown-item" href="#">FAQ</a></li>
                                    <li><a class="dropdown-item" href="#">Coming Soon</a></li>
                                    <li><a class="dropdown-item" href="#">Membership Levels</a></li>
                                    <li><a class="dropdown-item" href="#">Login/Register</a></li>
                                    <li><a class="dropdown-item" href="#">Privacy Policy</a></li>
                                    <li><a class="dropdown-item" href="#">Terms of Services</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blog
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="horizontal_line"></div>
                                    <li><a class="dropdown-item" href="#">Blog Grid</a></li>
                                    <li><a class="dropdown-item" href="#">Blog Details</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form class="d-flex form_conatiner">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success w-5" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
