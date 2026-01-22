
'use client'; 
import UseHoverReveal from '@/hooks/UseHoverReveal';
import React from 'react';

interface DataType {
  title: string;
  bg_img: string;
}

const info_data: DataType[] = [
  {
    title: "Full-Stack Developer",
    bg_img: "/assets/img/about/portfolio-1.jpg",
  },
  {
    title: "Frontend Developer",
    bg_img: "/assets/img/about/portfolio-2.jpg",
  },
  {
    title: "Backend Developer",
    bg_img: "/assets/img/about/portfolio-3.jpg",
  },
  {
    title: "DevOps / Cloud Engineer",
    bg_img: "/assets/img/about/portfolio-4.jpg",
  }
]


const AboutInfo = () => {
  const {handleMouseMove} = UseHoverReveal();
  return (
    <>
      <div id="about-info-area" className="ab-info__area black-bg-3 pb-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="ab-info__text">

                <div>
                  I'm Sarraf <span className="line"></span> a self-taught full-stack developer
                  based in Ukraine. Initially working as a financial planner and social media marketer, I now work in a variety of roles, including <span>{}</span>

                  {info_data.map((item, index) => (
                    <React.Fragment key={index}>
                      <a
                        className="tp-hover-reveal-item"
                        href="#"
                        onMouseMove={(event) => handleMouseMove(event, '.tp-hover-reveal-item')}
                      >
                        {item.title}
                        <span></span>
                        <div
                          className="tp-hover-reveal-bg"
                          style={{ backgroundImage: `url(${item.bg_img})` }}
                        ></div>
                      </a>
                      {', '}
                    </React.Fragment>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;