import React from 'react'
import star from '../images/star.png'

const Pricing = () => {
    return (
        <div class="price_section ">
            <div class="container">
                <div class="project_title">
                    <span class="Recent_project"><img src={star} alt="priceing" />Pricing</span>
                    <h2 className="text-dark">Pricing Plans</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div class="membership-levels-table table-responsive">
                    <table class="table table_heading">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <span class="title">List Of Features</span>
                                </th>
                                <th scope="col">
                                    <span class="price">$15.00</span>
                                    <span class="title">Basic Plan</span>
                                    <span class="desc">/Monthly</span>
                                </th>
                                <th scope="col">
                                    <span class="price">$35.00</span>
                                    <span class="title">Advanced Plan</span>
                                    <span class="desc">/Monthly</span>
                                </th>
                                <th scope="col">
                                    <span class="price">$65.00</span>
                                    <span class="title">Expert Plan</span>
                                    <span class="desc">/Monthly</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td scope="row"><h5>Number of features</h5></td>
                                <td className="first_row">6</td>
                                <td className="first_row">7</td>
                                <td className="first_row">8</td>
                            </tr>
                            <tr>
                                <td scope="row"><a href="/#">5 GB Bandwidth</a></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td scope="row"><a href="/#">Highest Speed</a></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td scope="row"><a href="/#">1 GB Storage</a></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td scope="row"><a href="/#">Unlimited Website</a></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td scope="row"><a href="/#">Unlimited Users</a></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td scope="row"><a href="/#">24x7 Great Support</a></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td scope="row"><a href="/#">Data Security and Backups</a></td>
                                <td class="cross_icon"><i class="fas fa-times"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td scope="row"><a href="/#">Monthly Reports and Analytics</a></td>
                                <td class="cross_icon"><i class="fas fa-times"></i></td>
                                <td class="cross_icon"><i class="fas fa-times"></i></td>
                                <td class="right_icon"><i class="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td scope="row"></td>
                                <td><a type="button" class="btn button_get" href="/#">Get it now</a></td>
                                <td><a type="button" class="btn button_get" href="/#">Get it now</a></td>
                                <td><a type="button" class="btn button_get" href="/#">Get it now</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Pricing
