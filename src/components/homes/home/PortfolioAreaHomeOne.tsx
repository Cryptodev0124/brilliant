"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import portfolio_img_1 from "@/assets/img/portfolio/portfolio-1.png";
import portfolio_img_2 from "@/assets/img/portfolio/portfolio-2.png";
import portfolio_img_3 from "@/assets/img/portfolio/portfolio-3.png";

import UpArrowIconPortfolio from '@/svg/home/PortfolioIcons/UpArrowIconPortfolio';
import RitghtArrowIconPortfolio from '@/svg/home/PortfolioIcons/RitghtArrowIconPortfolio';

const portfolio_content = {
  subtitle: 'Project',
  title: 'Latest projects',
  portfolio_data: [
    {
      id: 2,
      img: portfolio_img_2,
      bg_img: "/assets/img/portfolio/portfolio-2.png",
      title: 'Meme Coin & Launchpad Development',
      subtitle: 'Token create',
      displayId: '02',
      link: 'https://www.fiverr.com/atanasov8/create-cryptocurrency-token-meme-coin-presale-and-ico-page?context_referrer=seller_page&ref_ctx_id=c54c773c4b3544e7aecc99da5424b6af&pckg_id=1&pos=1&seller_online=true&imp_id=94e98157-77f1-436d-a584-56b8dabb7da5'
    },
    {
      id: 3,
      img: portfolio_img_3,
      bg_img: "/assets/img/portfolio/portfolio-3.png",
      title: "Crypto Trading Bots Development",
      subtitle: 'Trading bots',
      displayId: '03',
      link: 'https://www.fiverr.com/atanasov8/build-telegram-mini-game-like-hamster-kombat-moonbix-doghouse-and-tapswap?context_referrer=seller_page&ref_ctx_id=c54c773c4b3544e7aecc99da5424b6af&pckg_id=1&pos=3&seller_online=true&imp_id=c4a84bd7-0db1-4c31-b05b-c4c2542cc7cf'
    }
  ]
}
const { subtitle, title, portfolio_data } = portfolio_content


const PortfolioAreaHomeOne = () => {

  return (
    <>
      <section className="tp-portfolio-area tp-btn-trigger-2 p-relative z-index-1 pt-280 pb-40 fix">
        <div className="tp-portfolio-top-text tp-portfolio-bg-text d-flex align-items-center tp-portfolio-bg-text-animation">
          <p>{title}</p>
          <p>{title}</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-portfolio-wrapper pr-30 pt-55">
                <div className="tp-section-title-wrapper mb-60">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle tp-portfolio-subtitle">{subtitle}</span>
                    <h3 className="tp-section-title tp_title_anim">{title}</h3>
                  </div>
                </div>
                <div className="tp-portfolio-item-wrapper">
                  <div className="tp-portfolio-item mb-70">
                    <Link target="_blank" href="https://www.fiverr.com/atanasov8/build-dex-and-defi-like-bridge-staking-exchange-website?context_referrer=seller_page&ref_ctx_id=c54c773c4b3544e7aecc99da5424b6af&pckg_id=1&pos=2&seller_online=true&imp_id=f1d534f6-308a-4e53-9d95-31d952e007f5">
                      <div className="tp-portfolio-thumb img-1 w-img fix ">
                        <div className="tp-portfolio-thumb-img include-bg d-none"
                          style={{ backgroundImage: 'url(/assets/img/portfolio/portfolio-2.jpg)' }}></div>
                        <div className="tp-portfolio-thumb-img ">
                          <Image data-speed="0.85" style={{ objectFit: 'cover', height: "auto" }} src={portfolio_img_1} alt="image-here" />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">DApp Development - DEX & Defi projects</h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">01</span>
                          <span className="tp-portfolio-meta-arrow">
                            <RitghtArrowIconPortfolio />
                          </span>
                          <div className="tp-portfolio-meta-hover">
                            <span>Dapps</span>
                            <span className="tp-portfolio-meta-link">View Project</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="tp-portfolio-more tp-hover-btn-wrapper tp-btn-bounce-2 d-none d-lg-block">
                  <Link href="/portfolio-details"
                    className="tp-hover-btn tp-hover-btn-item tp-btn-circle-2 d-flex align-items-center justify-content-center flex-column">
                    <span className="tp-btn-circle-text-2">
                      Explore <br /> All Project
                      <span className="tp-btn-circle-arrow-2">
                        <UpArrowIconPortfolio />
                      </span>
                    </span>
                    <i className="tp-btn-circle-dot"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-portfolio-item-wrapper pl-50">
                {portfolio_data.map((item, i) =>
                  <div key={i} className="tp-portfolio-item mb-70">
                    <Link target='_blank' href={item.link}>
                      <div className="tp-portfolio-thumb img-2 w-img fix">

                        <div className="tp-portfolio-thumb-img include-bg d-none"
                          style={{ backgroundImage: `url(${item.bg_img})`, height: "auto" }}></div>
                        <div className="tp-portfolio-thumb-img">
                          <Image data-speed="0.85" style={{ height: "auto",}} src={item.img} alt="image-here" />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">{item.title}</h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">{item.displayId}</span>
                          <span className="tp-portfolio-meta-arrow">
                            <RitghtArrowIconPortfolio />
                          </span>
                          <div className="tp-portfolio-meta-hover">
                            <span>{item.subtitle}</span>
                            <span className="tp-portfolio-meta-link">View Project</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )} 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioAreaHomeOne;