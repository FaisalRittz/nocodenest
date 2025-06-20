"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroAnimation from "./animation/HeroAnimation";

export default function Hero() {
  const line1Ref = useRef();
  const line2Ref = useRef();
  const line3Ref = useRef();
  const line4Ref = useRef();

  useEffect(() => {
    if (!line1Ref.current || !line2Ref.current || !line3Ref.current || !line4Ref.current) return;

    const lettersLine1 = line1Ref.current.querySelectorAll(".letter");
    const lettersLine2 = line2Ref.current.querySelectorAll(".letter");
    const lettersLine3 = line3Ref.current.querySelectorAll(".letter");
    const lettersLine4 = line4Ref.current.querySelectorAll(".letter");
    const text = document.querySelectorAll(".text");

    gsap.fromTo(lettersLine1, { y: "100%", opacity: 0 }, {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.05,
      delay: 1,
    });

    gsap.fromTo(lettersLine2, { y: "100%", opacity: 0 }, {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.05,
      delay: 2,
    });

    gsap.fromTo(lettersLine3, { y: "100%", opacity: 0 }, {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.05,
      delay: 2,
      onStart: () => {
        gsap.to(".line3-bg", {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        });
      },
    });

    gsap.fromTo(lettersLine4, { y: "100%", opacity: 0 }, {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.05,
      delay: 2.3,
    });

    gsap.fromTo(text, { y: "100%", opacity: 0 }, {
      y: "0%",
      opacity: 1,
      duration: 0.7,
      ease: "power4.out",
      stagger: 0.05,
      delay: 0.5,
    });
  }, []);

  const createLine = (textArr, className = "", textColor = "text-gray-800") => (
    textArr.map((item, index) => (
      <span key={index} className="overflow-hidden">
        <span className={`letter inline-block ${textColor} ${className}`}>{item.char === " " ? "\u00A0" : item.char}</span>
      </span>
    ))
  );

  const line1Text = [..."Launch your Website or Online Store"].map(char => ({ char }));
  const line2Text = [..."In One Minute"].map(char => ({ char }));
  const line3Text = [..."No Code"].map(char => ({ char }));
  const line4Text = [...", Infinite Power"].map(char => ({ char }));

  return (
    <section className="relative bg-[url('/assets/grid.jpg')] bg-center bg-cover h-[110vh] sm:h-[130vh] md:h-[150vh] lg:h-[170vh] xl:h-[182vh] bg-[#f5f7fa] text-black overflow-x-hidden scrollbar">
      
      <div className="absolute top-0 w-full px-4 sm:px-6 py-4 flex justify-between items-center z-10">
        <div className="flex-1 flex justify-start ml-2 sm:ml-6">
          <h1 className="text font-extrabold text-[11px] sm:text-2xl md:text-2xl">No Code Nest</h1>
        </div>
        <div className="flex-1 hidden md:flex justify-center gap-4 md:gap-8 lg:gap-12 text-base md:text-lg lg:text-2xl">
          <h1 className="text">Why Us</h1>
          <h1 className="text">Testimonial</h1>
        </div>
        <div className="flex-1 flex justify-end mr-10 sm:mr-6">
          <button className="text bg-gradient-to-b from-green-600 via-green-700 to-black text-white px-2 py-2 text-[6px] rounded-full flex items-center gap-2 shadow-md text-xs sm:text-sm md:text-base">
            Try NoNestCode Free
            <img src="/assets/rocket.svg" alt="Rocket" className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      <h1 className="letter absolute w-full px-4 text-center font-bold z-10 flex flex-col justify-center items-center text-[1.4rem] leading-[2rem] top-[5rem] sm:text-[2rem] sm:leading-[2.8rem] sm:top-[7rem] sm:right-[1.5rem] md:text-[2.4rem] md:leading-[3.7rem] md:top-[10rem] md:right-[1.5rem] lg:text-[3.2rem] lg:leading-[5rem] lg:top-[11rem] xl:text-[4.5rem] xl:leading-[6.2rem] xl:top-[10rem]">
        <div ref={line1Ref} className="flex flex-wrap overflow-hidden mb-12" style={{ lineHeight: 1 }}>{createLine(line1Text)}</div>
        <div ref={line2Ref} className="flex flex-wrap overflow-hidden mb-12" style={{ lineHeight: 1 }}>{createLine(line2Text, "", "text-[#10B981]")}</div>
        <div className="flex flex-row">
          <div ref={line3Ref} className="line3-bg opacity-0 transition-opacity duration-500 flex flex-wrap overflow-hidden bg-[url('/assets/bg.png')] bg-no-repeat bg-[length:150%_310%] bg-center" style={{ lineHeight: 1 }}>{createLine(line3Text)}</div>
          <div ref={line4Ref} className="flex flex-wrap overflow-hidden" style={{ lineHeight: 1 }}>{createLine(line4Text)}</div>
        </div>
      </h1>

      <p className="text absolute w-full px-4 text-center text-gray-700 z-10 text-sm top-[20rem] sm:text-base sm:top-[21rem] md:text-[1rem] md:top-[25rem] lg:text-xl lg:top-[43%] xl:top-[40%]">
        Build custom tools effortlessly for any industry—fast, flexible,<br className="hidden sm:block" /> scalable, and beautifully simple.
      </p>

      <button className="text absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-green-700 via-green-800 to-black text-white px-6 py-2 rounded-full flex items-center gap-1 shadow-md z-10 text-[0.5rem] top-[23rem] sm:text-base sm:top-[25rem] md:top-[30rem] lg:top-[50%] xl:top-[46%]">
        Start Free Trial
        <img src="/assets/rocket.svg" alt="Rocket" className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <img src="/assets/click.gif" alt="Click" className="text absolute left-1/2 w-[4.5rem] h-[4.5rem] z-10 top-[22rem] sm:top-[25rem] md:top-[30rem] lg:top-[55%] xl:top-[45%]" />

      <div className="absolute right-[1vw] top-[62vh] z-0 rounded-full bg-[#D3FFB9] h-[20vw] w-[20vw] sm:h-[19vw] sm:w-[19vw] sm:top-[73vh] md:h-[22vw] md:w-[22vw] md:top-[50%] md:right-0 lg:h-[21vw] lg:w-[21vw] lg:top-[58%] xl:h-[15vw] xl:w-[15vw] xl:top-[48%]" />
      <div className="absolute left-[1vw] bottom-0 z-0 rounded-full bg-[#D3FFB9] h-[20vw] w-[20vw] sm:h-[19vw] sm:w-[19vw] md:h-[22vw] md:w-[22vw] md:top-[88%] sm:top-[105vh] lg:top-[97%] lg:left-0 xl:top-[87%] xl:h-[15vw] xl:w-[15vw]" />

      <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-100 rounded-2xl z-10 w-[82vw] h-[35vh] top-[69vh] sm:top-[80vh] md:h-[58vh] md:top-[58%] lg:w-[87vw] lg:h-[76vh] lg:top-[64%] xl:top-[54%]" style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)" }}>
        <HeroAnimation />
      </div>
    </section>
  );
}