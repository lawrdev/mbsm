"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaChevronCircleRight } from "react-icons/fa";

const faqData = [
  {
    heading: "FAQ one",
    content: `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, possimus delectus. Deserunt in quis, deleniti exercitationem debitis quo aperiam quam facere nam quod eos non dicta quaerat ipsam sequi ut..`,
    uuid: 1,
  },
  {
    heading: "FAQ two",
    content: `
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, possimus delectus. Deserunt in quis, deleniti exercitationem debitis quo aperiam quam facere nam quod eos non dicta quaerat ipsam sequi ut..`,
    uuid: 4,
  },
  {
    heading: "FAQ three",
    content: `
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, possimus delectus. Deserunt in quis, deleniti exercitationem debitis quo aperiam quam facere nam quod eos non dicta quaerat ipsam sequi ut..`,
    uuid: 6,
  },
  {
    heading: "FAQ four",
    content: `
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, possimus delectus. Deserunt in quis, deleniti exercitationem debitis quo aperiam quam facere nam quod eos non dicta quaerat ipsam sequi ut..`,
    uuid: 8,
  },
];
const ApplyNow = () => {
  return (
    <section className="apply-now" id="apply">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="row">
              <div className="col-lg-12">
                <div className="item">
                  <h3>APPLY FOR BACHELOR DEGREE</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere exercitationem maiores deleniti minima et ex. Sint
                    velit impedit, officia tempora sapiente assumenda quisquam
                    eos beatae hic tempore aspernatur cupiditate neque.
                  </p>
                  <div className="main-button-red">
                    <div className="scroll-to-section">
                      <a href="#contact">Get started now!</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="item">
                  <h3>APPLY FOR A MASTERS DEGREE</h3>
                  <p>
                    Illum ipsa cum tempore, et odit, deleniti quaerat ab amet
                    voluptate sapiente voluptatibus voluptatem soluta
                    consequatur tempora enim commodi laborum perferendis
                    reprehenderit! Asperiores doloremque libero ab. Explicabo
                    nostrum vitae voluptatibus?
                  </p>
                  <div className="main-button-yellow">
                    <div className="scroll-to-section">
                      <a href="#contact">Get started Now!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="accordion accordions  accordion-flush"
              id="accordionFlushExample"
            >
              {faqData.map((item) => (
                <div className="accordion-item " key={item.uuid}>
                  <h2
                    className="accordion-header accordion-head"
                    style={{ background: "transparent" }}
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${item.uuid}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${item.uuid}`}
                      style={{ fontWeight: 600 }}
                    >
                      {item.heading}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${item.uuid}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;
