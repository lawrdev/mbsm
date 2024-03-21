import Image from "next/image";
import React from "react";

const FeaturedCourses = () => {
  return (
    <section className="upcoming-meetings" id="meetings">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Featured Courses</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="categories">
              <h4>Courses starting this week</h4>
              <ul>
                <li>
                  <a href="#">Sed tempus enim leo</a>
                </li>
                <li>
                  <a href="#">Aenean molestie quis</a>
                </li>
                <li>
                  <a href="#">Cras et metus vestibulum</a>
                </li>
                <li>
                  <a href="#">Nam et condimentum</a>
                </li>
                <li>
                  <a href="#">Phasellus nec sapien</a>
                </li>
              </ul>
              <div className="main-button-red">
                <a href="meetings.html">All Courses</a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6">
                <div className="meeting-item">
                  <div className="thumb">
                    <div className="price">
                      <span>$32.00</span>
                    </div>
                    <a href="meeting-details.html">
                      <Image
                        width={370}
                        height={215}
                        priority
                        src="/images/meeting-01.jpg"
                        alt="New Lecturer Meeting"
                      />
                    </a>
                  </div>
                  <div className="down-content">
                    <div className="date">
                      <h6>
                        May <span>24</span>
                      </h6>
                    </div>
                    <a href="meeting-details.html">
                      <h4>Computer Science</h4>
                    </a>
                    <p>
                      Morbi in libero blandit lectus
                      <br />
                      cursus ullamcorper.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="meeting-item">
                  <div className="thumb">
                    <div className="price">
                      <span>$136.00</span>
                    </div>
                    <a href="meeting-details.html">
                      <Image
                        width={370}
                        height={215}
                        priority
                        src="/images/meeting-02.jpg"
                        alt="Online Teaching"
                      />
                    </a>
                  </div>
                  <div className="down-content">
                    <div className="date">
                      <h6>
                        May <span>01</span>
                      </h6>
                    </div>
                    <a href="meeting-details.html">
                      <h4>Introduction to UX design</h4>
                    </a>
                    <p>
                      Morbi in libero blandit lectus
                      <br />
                      cursus ullamcorper.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="meeting-item">
                  <div className="thumb">
                    <div className="price">
                      <span>$17.00</span>
                    </div>
                    <a href="meeting-details.html">
                      <Image
                        width={370}
                        height={215}
                        priority
                        src="/images/meeting-03.jpg"
                        alt="Higher Education"
                      />
                    </a>
                  </div>
                  <div className="down-content">
                    <div className="date">
                      <h6>
                        Apr <span>01</span>
                      </h6>
                    </div>
                    <a href="meeting-details.html">
                      <h4>Higher Education Conference</h4>
                    </a>
                    <p>
                      Morbi in libero blandit lectus
                      <br />
                      cursus ullamcorper.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="meeting-item">
                  <div className="thumb">
                    <div className="price">
                      <span>$48.00</span>
                    </div>
                    <a href="meeting-details.html">
                      <Image
                        width={370}
                        height={215}
                        priority
                        src="/images/meeting-04.jpg"
                        alt="Student Training"
                      />
                    </a>
                  </div>
                  <div className="down-content">
                    <div className="date">
                      <h6>
                        Jun <span>30</span>
                      </h6>
                    </div>
                    <a href="meeting-details.html">
                      <h4>Social Science</h4>
                    </a>
                    <p>
                      Morbi in libero blandit lectus
                      <br />
                      cursus ullamcorper.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
