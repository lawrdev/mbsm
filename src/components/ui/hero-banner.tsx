import React from "react";

const HeroBanner = () => {
  return (
    <section className="section main-banner" id="top" data-section="section1">
      <video autoPlay muted loop id="bg-video">
        <source src="./images/course-video.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="caption">
                <h6>Unlimited learning</h6>
                <h2>Welcome to EduFusion</h2>
                <p>
                  Embark on a boundless journey of knowledge with our monthly
                  subscription{" "}
                  <a rel="nofollow" href="#">
                    subscription
                  </a>
                  for endless{" "}
                  <a
                    rel="nofollow"
                    href="https://www.pexels.com/@pressmaster"
                    target="_blank"
                  >
                    courses!
                  </a>
                  .
                </p>
                <div className="main-button-red">
                  <div className="scroll-to-section">
                    <a href="#contact">Enroll Today</a>
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

export default HeroBanner;
