import React from 'react';
import Image, { StaticImageData } from "next/image";

import start_icon from "@/assets/img/services/shape/services-shape-3.png";
import skill_icon_1 from "@/assets/img/skill/figma-sm.png";
import skill_icon_2 from "@/assets/img/skill/photoshop-sm.png";
import skill_icon_3 from "@/assets/img/skill/xd-sm.png";
import skill_icon_4 from "@/assets/img/skill/sketch-sm.png";
import skill_icon_5 from "@/assets/img/skill/in-sm.png";


interface DataType {
  expreience_data: {
      id: number;
      date: string;
      title: string;
      company: string;
  }[];
  skill_data: {
      id: number;
      img: StaticImageData;
      name: string;
      percent: string;
  }[];
}

const expreience_content: DataType = {
  expreience_data: [
    {
      id: 1,
      date: "Oct 2022 - Present",
      title: "Full Stack Developer",
      company: "Techverse Solutions",
    },
    {
      id: 2,
      date: "Oct 2021 - Oct 2022",
      title: "Senior Full Stack Developer",
      company: "Fourmeta Agency",
    },
    {
      id: 3,
      date: "Apr 2020 - Oct 2021",
      title: "Frontend / Full Stack Developer",
      company: "PixelCraft Labs",
    },
    {
      id: 4,
      date: "Feb 2015 - Apr 2020",
      title: "Full Stack Developer Intern",
      company: "Startup Hub",
    },
  ],
  skill_data: [
    { id: 1, img: skill_icon_2, name: "JavaScript", percent: "95%" },
    { id: 2, img: skill_icon_1, name: "TypeScript", percent: "90%" },
    { id: 3, img: skill_icon_3, name: "React", percent: "94%" },
    { id: 4, img: skill_icon_4, name: "Next.js", percent: "88%" },
    { id: 5, img: skill_icon_5, name: "Node.js", percent: "92%" },
    { id: 6, img: skill_icon_1, name: "Express", percent: "85%" },
    { id: 7, img: skill_icon_2, name: "MongoDB", percent: "80%" },
    { id: 8, img: skill_icon_3, name: "PostgreSQL", percent: "78%" },
    { id: 9, img: skill_icon_4, name: "Docker", percent: "82%" },
    { id: 10, img: skill_icon_5, name: "AWS", percent: "76%" },
  ],
}
const { expreience_data, skill_data } = expreience_content


const ExperienceAreaHomeTwo = () => {
  return (
    <>
      <div className="section">
        <div className="tp-hero-2__bg black-bg-3 tp-hero-2__space-5 d-flex align-items-start justify-content-center z-index-1 p-relative fix">
          <div className="tp-hero-distort-2" style={{ backgroundImage: 'url(/assets/img/hero/hero-2-overlay.png)' }}></div>
          <div className="tp-hero-2__boder-circle tp-hero-2__boder-circle-tr">
            <span></span>
          </div>
          <div className="tp-hero-2__circle-wrapper tp-hero-2__circle-pos">
            <span className="tp-hero-2__circle-1"></span>
            <span className="tp-hero-2__circle-2"></span>
            <span className="tp-hero-2__circle-3"></span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-2__design-exp-wrap">
                  <div className="tp-hero-2__design-exp-top-title">
                    <span>
                      <Image className="tp-zoom-in-out" src={start_icon} alt="image-here" />
                      EXPERIENCE</span>
                  </div>
                  <ul>

                    {expreience_data.map((item, index) => (
                      <li key={index}>
                        <div
                          className="tp-hero-2__design-exp-item d-flex align-items-center justify-content-between">
                          <div className="tp-hero-2__design-exp-meta d-flex align-items-center">
                            <span>{item.date}</span>
                            <h4 className="tp-hero-2__design-exp-title">{item.title}</h4>
                          </div>
                          <div className="tp-hero-2__design-exp-company">
                            <span>{item.company}</span>
                          </div>
                        </div>
                      </li>
                    ))}

                  </ul>
                </div>
                <div className="tp-hero-2__design-exp-skill-wrap">
                  <div className="tp-hero-2__design-exp-top-title mb-30">
                    <span>
                      <Image className="tp-zoom-in-out" src={start_icon} alt="image-here" />
                      Skills</span>
                  </div>
                  <div className="row row-cols-xl-5 row-cols-md-3">

                    {skill_data.map((skill_item, i) => (
                      <div key={i} className="col-xl">
                        <div
                          className={`mb-20 tp-hero-2__design-exp-skill-item justify-content-center bg-${skill_item.id} d-flex align-items-center`}>
                          <div className="tp-hero-2__design-exp-skill-icon">
                            <Image src={skill_item.img} alt="image-here" />
                          </div>
                          <div className="tp-hero-2__design-exp-skill-info">
                            <span>{skill_item.percent}</span>
                            <i>{skill_item.name}</i>
                          </div>
                        </div>
                      </div>
                    ))} 
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

export default ExperienceAreaHomeTwo;