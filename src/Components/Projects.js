import React from 'react'
import dataScience from '../images/dataScience.jpg'
import MechineLearning from '../images/MechineLearning.jpg'
import Programming from '../images/Programming.jpg'
import scienceProject from '../images/scienceProject.jpg'
import systemproject from '../images/systemproject.jpg'
import webProject from '../images/webProject.jpg'
import star from '../images/star.png'
const Projects = () => {
    return (
        <section class="projects_section  pt-150 pb-70">
            <div class="container">
                <div class=" project_title">
                    <span class="Recent_project"><img src={star} alt="project" /> Recent Projects</span>
                    <h2>Check Some Of Our Recent Work</h2>
                    <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="projects">
                            <div class="project_image">
                                <img src={systemproject} alt="project" />
                                {/* <a class="link-btn" href="#"><i class="bx bx-plus"></i></a> */}
                            </div>
                            <div class="project_content">
                                <h4><a href="#">Movie Recommendation</a></h4>
                                <span>System Project</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="projects">
                            <div class="project_image"><img src={MechineLearning} alt="project" />
                                {/* <a class="link-btn" href="#"><i class="bx bx-plus"></i></a> */}
                            </div>
                            <div class="project_content">
                                <h4><a href="#">Customer Segmentation</a></h4>
                                <span>Machine Learning</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="projects">
                            <div class="project_image"><img src={webProject} alt="project" />
                                {/* <a class="link-btn" href="#"><i class="bx bx-plus"></i></a> */}
                            </div>
                            <div class="project_content">
                                <h4><a href="#">Data Analysis</a></h4>
                                <span>Web Project</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="projects">
                            <div class="project_image">
                                <img src={Programming} alt="project" />
                                {/* <a class="link-btn" href="#"><i class="bx bx-plus"></i>
                                </a> */}
                            </div>
                            <div class="project_content">
                                <h4><a href="#">Detection Project</a></h4>
                                <span>Programming</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="projects ">
                            <div class="project_image">
                                <img src={dataScience} alt="project" />
                                {/* <a class="link-btn" href="#">
                                    <i class="bx bx-plus"></i>
                                </a> */}
                            </div>
                            <div class="project_content">
                                <h4>
                                    <a href="#">Data Scientist</a>
                                </h4>
                                <span>Data Science</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="projects">
                            <div class="project_image">
                                <img src={scienceProject} alt="project" />
                                {/* <a class="link-btn" href="#">
                                    <i class="bx bx-plus"></i>
                                </a> */}
                            </div>
                            <div class="project_content">
                                <h4><a href="/case-studies-details">Benefits Research</a></h4>
                                <span>Science Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
