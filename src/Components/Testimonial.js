import React from "react";
import Clients_data from './Cient_rewiew'
import star from '../images/star.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "../Style.css";
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);



const Testimonial = () => {


  return (
    <div class="testimonials_section ">
      <div class="container">
        <div class="title_section header">
          <span class="sub-title">
            <img className="sub_title" src={star} alt="testimonial" />Testimonials</span>
          <h2>What Our Clients are Saying?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        </div>
        <div class="first_slider">

          <Swiper slidesPerView={1}
            spaceBetween={0}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}

            navigation={true} className="mySwiper ">

            {Clients_data.map((dataa, key) =>
              <section className="slider_section ">
                <div className="row">
                  <div className="col-sm-6 col-md-6 ">
                    <SwiperSlide>
                      <div className="review_box ">
                        <p className="review_title">{dataa.review}</p>

                        <div className="about_user">

                          <img src={dataa.image} />

                          <div className="user_details">

                            <h4>{dataa.name}</h4>
                            <p>{dataa.subtitle}</p>

                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </div>
              </section>
            )}

          </Swiper>
        </div>

        <div className="second_sider">
          <Swiper slidesPerView={2}
            spaceBetween={25}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}

            navigation={true} className="mySwiper">

            {Clients_data.map((dataa, key) =>
              <section className="slider_section">
                <div className="row">
                  <div className="col-sm-6 col-md-6 ">
                    <SwiperSlide>
                      <div className="review_box">
                        <p className="review_title">{dataa.review}</p>

                        <div className="about_user">

                          <img src={dataa.image} />

                          <div className="user_details">

                            <h4>{dataa.name}</h4>
                            <p>{dataa.subtitle}</p>

                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </div>
              </section>
            )}

          </Swiper>
        </div>
        <div class="testimonials_btn text-center">
          <a class="btn" href="#"><i class="far fa-eye"></i>Check Out All Reviews <span></span></a>
        </div>
      </div>

    </div>
  )
}

export default Testimonial
