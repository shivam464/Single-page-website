import React from 'react'
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.jpg'
import star from '../images/star.png'
import blog_user1 from '../images/blog_user1.jpg'
import blog_user2 from '../images/blog_user2.jpg'
import blog_user3 from '../images/blog_user3.jpg'
const Blogs = () => {
    return (
        <section class="blog_section ">
            <div class="container">
                <div class="title_section blog_header">
                    <span class="sub_title "><img src={star} alt="blog" />Our Blog</span>
                    <h2>Latest Valuable Insights</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="blog_div">
                            <div class="blog_img">
                                <a href="#"><img src={blog1} alt="blog" /></a>
                            </div>
                            <div class="blog_content">
                                <ul class="blog_content_list ">
                                    <li>
                                        <div class="user_blog ">
                                            <img src={blog_user1} class="rounded-circle" alt="blog" />
                                            <span>Alex Morgan</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="flaticon-calendar"></i> April 30, 2020
                                    </li>
                                </ul>
                                <h3><a href="#">Six Ways to Make Smarter Decisions</a></h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="blog_div">

                            <div class="blog_img">
                                <a href="#"><img src={blog2} alt="blog" /></a>
                            </div>
                            <div class="blog_content">
                                <ul class="blog_content_list ">
                                    <li>
                                        <div class="user_blog ">
                                            <img src={blog_user2} class="rounded-circle" alt="blog" />
                                            <span>Sarah Taylor</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="flaticon-calendar"></i> April 28, 2020
                                    </li>
                                </ul>
                                <h3><a href="/blog-details">The Challenges to Tackle Before You Start With AI</a></h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div class="blog_div">
                            <div class="blog_img">
                                <a href="#"><img src={blog3} alt="blog" /></a>
                            </div>
                            <div class="blog_content">
                                <ul class="blog_content_list ">
                                    <li>
                                        <div class="user_blog ">
                                            <img src={blog_user3} class="rounded-circle" alt="blog" />
                                            <span>David Warner</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="flaticon-calendar"></i> April 29, 2020
                                    </li>
                                </ul>
                                <h3><a href="#">Why Organisations Want an Analytics Platform</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs
