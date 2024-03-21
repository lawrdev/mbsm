import React from "react";

const TopNavigation = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="#" className="logo">
                EduFusion
              </a>

              <ul className="nav" style={{ color: "#000" }}>
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#apply">Apply Now</a>
                </li>
                <li className="has-sub">
                  <a href="javascript:void(0)">Courses</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Online</a>
                    </li>
                    <li>
                      <a href="#">Study here</a>
                    </li>
                  </ul>
                </li>
                <li className="scroll-to-section">
                  <a href="#subs">Subscription</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
