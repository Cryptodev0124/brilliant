"use client";
import Image from 'next/image';
import React, { MouseEvent } from 'react';


import service_start from "@/assets/img/services/shape/services-shape-3.png";
import RightArrowHomeTwo from '@/svg/home-2/RightArrowHomeTwo';
import UseHoverReveal from '@/hooks/UseHoverReveal';


interface DataType {
  id: number;
  accordion_id: string;
  bg_img: string;
  question: string;
  ans: string;
}

const service_data: DataType[] = [
  {
    id: 1,
    accordion_id: "One",
    bg_img: "/assets/img/faq/faq-4.jpg",
    question: "Full Stack Development",
    ans: "Building complete web applications end-to-end: from responsive, accessible user interfaces to scalable backend services. I implement features, integrate APIs, and ensure seamless user experiences across devices while maintaining performance and maintainability.",
  },
  {
    id: 2,
    accordion_id: "Two",
    bg_img: "/assets/img/faq/faq-1.jpg",
    question: "Frontend Engineering",
    ans: "Creating pixel-perfect, component-driven UIs using modern frameworks like React and Next.js with TypeScript. Focus areas include state management, responsive design, accessibility, performance optimization, and reusable component libraries.",
  },
  {
    id: 3,
    accordion_id: "Three",
    bg_img: "/assets/img/faq/faq-2.jpg",
    question: "Backend & APIs",
    ans: "Designing and implementing robust backend systems and REST/GraphQL APIs including authentication, authorization, business logic, and integrations with third-party services. Emphasis on security, scalability, and clear API contracts.",
  },
  {
    id: 4,
    accordion_id: "Four",
    bg_img: "/assets/img/faq/faq-3.jpg",
    question: "Databases, DevOps & Testing",
    ans: "Managing relational and NoSQL databases, optimizing data access, and ensuring reliability. Setting up CI/CD pipelines, containerization, cloud deployments, and implementing thorough testing (unit, integration, end-to-end) to deliver stable production-ready applications.",
  },
  {
    id: 5,
    accordion_id: "Five",
    bg_img: "/assets/img/faq/faq-5.jpg",
    question: "Mobile & Cross-Platform Apps",
    ans: "Developing native and cross-platform mobile applications (e.g., React Native, Flutter) with performant UI, offline support, and platform integrations. Focus on maintainable code, seamless UX, and smooth release pipelines for app stores.",
  },
  {
    id: 6,
    accordion_id: "Six",
    bg_img: "/assets/img/faq/faq-6.jpg",
    question: "UI/UX Design & Prototyping",
    ans: "Crafting user-centered designs, interactive prototypes, and design systems that align with product goals. I iterate on wireframes, conduct usability testing, and deliver handoff-ready assets to accelerate implementation.",
  },
]

const ServiceAreaHomeTwo = () => {
  const {handleMouseMove} = UseHoverReveal();
  return (
    <>
      <div className="section">
        <div className="tp-hero-2__bg black-bg-3 tp-hero-2__space-3 d-flex align-items-start justify-content-center z-index-1 p-relative fix">
          <div className="tp-hero-distort-2" style={{ backgroundImage: 'url(/assets/img/hero/hero-2-overlay.png)' }}></div>
          <div className="tp-hero-2__circle-wrapper">
            <span className="tp-hero-2__circle-1"></span>
            <span className="tp-hero-2__circle-2"></span>
            <span className="tp-hero-2__circle-3"></span>
            <span className="tp-hero-2__circle-4"></span>
          </div>
          <div className="tp-hero-2__boder-circle tp-hero-2__boder-circle-tr">
            <span></span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-2__service-accordion">
                  <span className="tp-hero-2__service-title">
                    <Image className="tp-zoom-in-out" src={service_start} alt="image-here" />
                    OUR SERVICES
                  </span>

                  <div className="accordion" id="accordionExample">

                    {service_data.map((item, i) =>
                      <div key={i} className="accordion-items tp-hero-2__accordion-item tp-hover-reveal-item active" onMouseMove={(event) => handleMouseMove(event, '.tp-hover-reveal-item')}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-buttons ${i === 0 ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.accordion_id}`}
                            aria-expanded={`${i === 0 ? "true" : "false"}`}
                            aria-controls={`collapse${item.accordion_id}`}>
                            <RightArrowHomeTwo />
                            {item.question}<span>0{item.id}</span>
                            <span className="accordion-btn-wrap">
                              <span className="accordion-btn"></span>
                            </span>
                          </button>
                        </h2>
                        {/* <div className="tp-hover-reveal-bg" style={{ backgroundImage: `url(${item.bg_img})` }}></div> */}
                        <div id={`collapse${item.accordion_id}`} className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>{item.ans}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaHomeTwo;