import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const PageSubHeader = () => {
  return (
    <div className="sub-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-8">
            <div className="left-content">
              <p>
                Introducing new online <em>Maters</em> programs by Arda.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <div className="right-icons">
              <ul style={{ margin: 0 }}>
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSubHeader;
