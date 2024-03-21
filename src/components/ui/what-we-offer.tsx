"use client";

import Image from "next/image";
import React from "react";
import CustomSwiper from "../Swiper";
import { SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

const WhatWeOffer = () => {
  return (
    <section className="our-courses" id="courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Popular Courses</h2>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="position-relative w-100">
              <CustomSwiper>
                <>
                  <SwiperSlide
                    className="item"
                    style={{ width: "fit-content", height: "100%" }}
                  >
                    <div className="item">
                      <Image
                        width={270}
                        height={170}
                        src="/images/course-01.jpg"
                        alt="Course One"
                      />
                      <div className="down-content">
                        <h4>Morbi tincidunt elit vitae justo rhoncus</h4>
                        <div className="info">
                          <div className="row">
                            <div className="col-8">
                              <ul>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <span>$160/month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide style={{ width: "fit-content" }}>
                    <div className="item">
                      <Image
                        width={270}
                        height={170}
                        src="/images/course-02.jpg"
                        alt="Course Two"
                      />
                      <div className="down-content">
                        <h4>Curabitur molestie dignissim purus vel</h4>
                        <div className="info">
                          <div className="row">
                            <div className="col-8">
                              <ul>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <span>$180/month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide style={{ width: "fit-content" }}>
                    <div className="item">
                      <Image
                        width={270}
                        height={170}
                        src="/images/course-03.jpg"
                        alt=""
                      />
                      <div className="down-content">
                        <h4>Nulla at ipsum a mauris egestas tempor</h4>
                        <div className="info">
                          <div className="row">
                            <div className="col-8">
                              <ul>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <span>$140/month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide style={{ width: "fit-content" }}>
                    <div className="item">
                      <Image
                        width={270}
                        height={170}
                        src="/images/course-04.jpg"
                        alt=""
                      />
                      <div className="down-content">
                        <h4>Aenean molestie quis libero gravida</h4>
                        <div className="info">
                          <div className="row">
                            <div className="col-5" style={{ color: "#f5a425" }}>
                              <ul>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                              </ul>
                            </div>
                            <div className="col-6">
                              <span>$160/month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide style={{ width: "fit-content" }}>
                    <div className="item">
                      <Image
                        width={270}
                        height={170}
                        src="/images/course-01.jpg"
                        alt=""
                      />
                      <div className="down-content">
                        <h4>Lorem ipsum dolor sit amet adipiscing elit</h4>
                        <div className="info">
                          <div className="row">
                            <div className="col-8">
                              <ul>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                                <li>
                                  <FaStar />
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <span>$250/month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              </CustomSwiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
