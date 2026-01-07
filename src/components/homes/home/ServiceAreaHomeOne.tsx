'use client';
import React, {useState } from 'react';
import Image from 'next/image';

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png";


const service_content = {
  subtitle: "Services",
  title: <>Solution <br /> we provide.</>,
  sm_des: <>My passion for blockchain, smart contracts, and dApp<br />development drives my approach to blockchain innovation.</>,
  accordion_data: [
    {
      id: 1,
      tab_id: "One",
      question: "Smart Contract",
      answer: "As a smart contract developer, I prioritize the organization and structure of projects, with a strong focus on creating robust and efficient smart contract systems.",
      some_features: [
        "Solidity",
        "Rust",
        "Vyper",
        "C++",
        "Go"
      ]
    },
    {
      id: 2,
      tab_id: "Two",
      question: "dApp Build",
      answer: "I prioritize the structured approach to projects, with a strong focus on crafting seamless and user-friendly decentralized applications.",
      some_features: [
        "Next.js",
        "React",
        "JavaScript",
        "TypeScript",
      ]
    },
    {
      id: 3,
      tab_id: "Three",
      question: "Web3 Integration",
      answer: "Using the Web3 I emphasize the organization and innovation of projects, with a deep passion for developing and integrating cutting-edge decentralized technologies.",
      some_features: [
        "Web3.js",
      ]
    },
    {
      id: 4,
      tab_id: "Four",
      question: "Trading Bots",
      answer: "Unlock the full potential of your trading strategies with expertly designed bots. Whether you need a crypto trading bot to automate your trades, a trading volume bot for market analysis, or a Jito bundle bot for optimizing transaction bundles, Im here to deliver the solution you need.",
      some_features: [
        "Volume Bot",
        "MC Maker Bot",
        "Bundle Tx Bot",
        "Pump.fun Bot",
        "Telegram Bot"
      ]
    },
    {
      id: 5,
      tab_id: "Fiver",
      question: "Technical Support",
      answer: "I am committed to providing comprehensive technical support post-project launch, ensuring the seamless operation and continued success of your project.",
      some_features: [
        "Ethereum layer 2",
        "Solana",
        "BSC",
        "Polygon",
      ]
    },
    // {
    //   id: 6,
    //   tab_id: "Six",
    //   question: "Telegram Tap Game",
    //   answer: "Develop telegram tap game like Hamster Kombat, TapSwap and Dog House",
    //   some_features: [
    //     "Hamster Kombat",
    //     "TapSwap",
    //     "Dog House",
    //     "Tap game",
    //   ]
    // },
    {
      id: 7,
      tab_id: "Seven",
      question: "AI Agent Build",
      answer: "Build AI Agents platforms like virtual.io, daos.fun and ai-land.io",
      some_features: [
        "Virtual.io",
        "Daos.fun",
        "Ai-land.io",
        "Elizabeth framework",
      ]
    }
  ]
}

const { subtitle, title, sm_des, accordion_data } = service_content;


const ServiceAreaHomeOne = () => {
  const [active, setActive] = useState(1);

  const handleItemClick = (index: number) => {
    setActive(index);
  }

  return (
    <>
      <section className="tp-services-area tp-sv tp-services-bg-text-animation fix" id="tp-sv">
        <div className="container container-large">
          <div className="tp-services-inner pb-195 p-relative z-index-1">

            <span className="tp-services-inner-border tp-vertical-line transition-3"></span>
            <span className="tp-services-inner-border right tp-vertical-line transition-3"></span>

            <div className="tp-services-bottom-text tp-services-bg-text">
              <p>Services</p>
            </div>
            <div className="row gx-0">

              <div className="col-xl-6 col-lg-7">
                <div className="tp-services-wrapper tp-services-capsule-wrapper p-relative pt-100 pr-70" style={{ paddingTop: "100px", }}
                  data-tp-throwable-scene="true">
                  <div className="tp-section-title-wrapper tp_text_anim mb-170">
                    <div className="tp-section-title-inner p-relative">
                      <span className="tp-section-subtitle">{subtitle}</span>
                      <h3 className="tp-section-title tp_title_anim">{title}</h3>
                    </div>
                    <p>{sm_des}</p>
                  </div>

                  <div className="tp-services-capsule-item-wrapper">
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Defi Building</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Ethereum</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>DEX Building</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Solana</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Smart Contracts</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>NFT Launchpad</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Trading Bot</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>Binance Smart Chain</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Liquid Staking</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Lending & Borrowing</span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>TON develop</span>
                    </p>
                    {/* <p data-tp-throwable-el="">
                      <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Telegram tap game</span>
                    </p> */}
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_1} alt="brand-img" />
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_2} alt="brand-img" />
                      </span>
                    </p>
                  </div>

                </div>
              </div>

              <div className="col-xl-6 col-lg-5">
                <div className="tp-services-accordion tp-accordion tp-accordion-2 pl-70 p-relative" style={{ marginTop: "90px" }}>
                  <span className="tp-services-accordion-border"></span>
                  <div className="accordion" id="accordionExample">

                    {accordion_data.map((item, i) => (
                      <div key={i} onClick={() => handleItemClick(i)} className={`accordion-item tp-services-accordion-item ${active === i ? 'active' : ''}`}>
                        <h2 className="accordion-header" id={`heading${item.tab_id}`}>
                          <button
                            className={`accordion-button ${i === 1 ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id}`}
                            aria-expanded={`${i === 1 ? 'true' : 'false'}`}
                            aria-controls={`collapse${item.tab_id}`}
                            tabIndex={0}
                          >
                            <span>0{item.id}</span>
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.tab_id}`}
                          className={`accordion-collapse collapse ${i === 1 ? 'show' : ''}`}
                          aria-labelledby={`heading${item.tab_id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                            <ul>
                              {item.some_features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <span className="accordion-item-border"></span>
                      </div>
                    ))}

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeOne;