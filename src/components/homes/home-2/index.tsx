'use client';
import { useEffect } from 'react';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import HeroAreaHomeTwo from './HeroAreaHomeTwo';
import FooterTwo from '@/layouts/footers/FooterTwo';
import AboutAreaHomeTwo from './AboutAreaHomeTwo';
import ServiceAreaHomeTwo from './ServiceAreaHomeTwo';
import TestimonialAreaHomeTwo from './TestimonialAreaHomeTwo';
import ExperienceAreaHomeTwo from './ExperienceAreaHomeTwo';
import ClientAreaHomeTwo from './ClientAreaHomeTwo';
import ContactAreaHomeTwo from './ContactAreaHomeTwo';
import {pagePiling} from '@/utils/pagepiling';
import HeaderOne from '@/layouts/headers/HeaderOne';


const HomeTwo = () => {


useEffect(() => {
  pagePiling()
},[])


  return (
    <>
      <HeaderOne />
      <main>
        <div id="pagepiling">
          <HeroAreaHomeTwo />
          <AboutAreaHomeTwo />
          <ServiceAreaHomeTwo />
          <TestimonialAreaHomeTwo />
          <ExperienceAreaHomeTwo />
          <ClientAreaHomeTwo />
          <ContactAreaHomeTwo />
          <FooterTwo />
        </div>
        <div className="pagescroll-indication d-none d-xl-block">
          <span></span>
        </div>
      </main>


    </>
  );
};

export default HomeTwo;




