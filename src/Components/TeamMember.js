import React,{useState} from 'react'
import team1 from '../images/team1.jpg'
import team2 from '../images/team2.jpg'
import team3 from '../images/team3.jpg'
import star from '../images/star.png'

import facebook from '../images/facebook-logo.png'
import instagram from '../images/instagram-logo.png'
import linkedin from '../images/linkedin-logo.png'
import twitter from '../images/twitter-logo.png'


const TeamMember = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <section class="member_section ">
            <div class="container ">
                <div class="title_section">
                    <span class="sub_title"><img src={star} alt="team" />Team Members</span>
                    <h2>Our Awesome Team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-sm-6 px-0">
                        <div class="team_member_div">
                            <div class="image">
                                <img src={team1} alt="team"  onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}/>
                                <ul class="socialmedia_icon text-center">
                                    <li><a class="" href="/#"><img src={facebook} alt="facebook" /></a></li>
                                    <li><a class="" href="/#"><img src={twitter} alt="twitter" /></a></li>
                                    <li><a class="" href="/#"><img src={instagram} alt="instagram" /></a></li>
                                    <li><a class="" href="/#"><img src={linkedin} alt="linkedin" /></a></li>
                                </ul>
                            </div>
                            <div class="about_Member">
                                <h4>Merv Adrian</h4>
                                <span>CEO &amp; Founder</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 px-0">
                        <div class="single-scientist-item-box">
                            <div class="image">
                                <img src={team2} alt="team" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} />
                                <ul class="socialmedia_icon">
                                    <li><a class="" href="/#"><img src={facebook} alt="facebook" /></a></li>
                                    <li><a class="" href="/#"><img src={twitter} alt="twitter" /></a></li>
                                    <li><a class="" href="/#"><img src={instagram} alt="instagram" /></a></li>
                                    <li><a class="" href="/#"><img src={linkedin} alt="linkedin" /></a></li>
                                </ul>
                            </div>
                            <div class="about_Member">
                                <h4>Kirk Borne</h4>
                                <span>UX/UI Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 px-0">
                        <div class="single-scientist-item-box">
                            <div class="image">
                                <img src={team3} alt="team" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}/>
                                <ul class="socialmedia_icon">
                                    <li><a class="" href="/#"><img src={facebook} alt="facebook" /></a></li>
                                    <li><a class="" href="/#"><img src={twitter} alt="twitter" /></a></li>
                                    <li><a class="" href="/#"><img src={instagram} alt="instagram" /></a></li>
                                    <li><a class="" href="/#"><img src={linkedin} alt="linkedin" /></a></li>
                                </ul>
                            </div>
                            <div class="about_Member">
                                <h4>Carla Gentry</h4>
                                <span>Web Developer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 px-0">
                        <div class="single-scientist-item-box">
                            <div class="image"><img src={team3} alt="team" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}/>
                            <ul class="socialmedia_icon">
                                    <li><a class="" href="/#"><img src={facebook} alt="facebook" /></a></li>
                                    <li><a class="" href="/#"><img src={twitter} alt="twitter" /></a></li>
                                    <li><a class="" href="/#"><img src={instagram} alt="instagram" /></a></li>
                                    <li><a class="" href="/#"><img src={linkedin} alt="linkedin" /></a></li>
                                </ul>
                            </div>
                            <div class="about_Member">
                                <h4>Marie Curie</h4>
                                <span>Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMember;


