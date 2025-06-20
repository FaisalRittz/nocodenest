"use client";
import React, { useEffect, useRef} from "react";
import gsap from "gsap";
import HeroAnimation from "./animation/HeroAnimation";

export default function Hero() {

  const line1Ref = useRef();
  const line2Ref = useRef();
  const line3Ref = useRef();
  const line4Ref = useRef();

  useEffect(() => {
    if (
      !line1Ref.current ||
      !line2Ref.current ||
      !line3Ref.current ||
      !line4Ref.current
    ) return;

    const lettersLine1 = line1Ref.current.querySelectorAll(".letter");
    const lettersLine2 = line2Ref.current.querySelectorAll(".letter");
    const lettersLine3 = line3Ref.current.querySelectorAll(".letter");
    const lettersLine4 = line4Ref.current.querySelectorAll(".letter");
    const text = document.querySelectorAll(".text");

    gsap.fromTo(
      lettersLine1,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        delay: 1,
      }
    );
    gsap.fromTo(
      lettersLine2,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        delay: 2,
      }
    );
    gsap.fromTo(
      lettersLine3,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        delay: 2,
      }
    );
    gsap.fromTo(
      lettersLine4,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        delay: 2.3,
      }
    );
    gsap.fromTo(
      text,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.7,
        ease: "power4.out",
        stagger: 0.05,
        delay: 0.5,
      }
    );
  },[]);
  

  const line1Text = [
    { char: "L"},
    { char: "a" },
    { char: "u" },
    { char: "n" },
    { char: "c" },
    { char: "h" },
    { char: " " },
    { char: "y" },
    { char: "o" },
    { char: "u" },
    { char: "r" },
    { char: " " },
    { char: "W" },
    { char: "e" },
    { char: "b" },
    { char: "s" },
    { char: "i" },
    { char: "t" },
    { char: "e" },
    { char: " " },
    { char: "o" },
    { char: "r" },
    { char: " " },
    { char: "O" },
    { char: "n" },
    { char: "l" },
    { char: "i" },
    { char: "n" },
    { char: "e" },
    { char: " " },
    { char: "S" },
    { char: "t" },
    { char: "o" },
    { char: "r" },
    { char: "e" },
  ];

  const line2Text = [
    { char: "I" },
    { char: "n" },
    { char: " " },
    { char: "O" },
    { char: "n" },
    { char: "e" },
    { char: " " },
    { char: "M" },
    { char: "i" },
    { char: "n" },
    { char: "u" },
    { char: "t" },
    { char: "e" },
  ];
  const line3Text = [
    { char: "N" },
    { char: "o" },
    { char: " " },
    { char: "C" },
    { char: "o" },
    { char: "d" },
    { char: "e" },
  ];
  const line4Text = [
    { char: "," },
    { char: " " },
    { char: "I" },
    { char: "n" },
    { char: "f" },
    { char: "i" },
    { char: "n" },
    { char: "i" },
    { char: "t" },
    { char: "e" },
    { char: " " },
    { char: "P" },
    { char: "o" },
    { char: "w" },
    { char: "e" },
    { char:"r" },
  ];

  return (
    <section 
    className="relative bg-[url('/assets/grid.jpg')] bg-center bg-cover  h-[110vh] sm:h-[130vh] md:h-[150vh] lg:h-[170vh] xl:h-[182vh] bg-[#f5f7fa] text-black overflow-x-hidden scrollbar"
    >
      
      <div className="absolute top-0 w-full px-4 sm:px-6 py-4 flex justify-between items-center z-10">
        <div className="flex-1 flex justify-start ml-2 sm:ml-6">
          <h1 className=" text font-extrabold text-[11px] sm:text-2xl md:text-2xl">
            No Code Nest
          </h1>
        </div>

        <div className="flex-1 hidden md:flex justify-center gap-4 md:gap-8 lg:gap-12 text-base md:text-lg lg:text-2xl">
          <h1 className="text">Why Us</h1>
          <h1 className="text">Testimonial</h1>
        </div>

        <div className="flex-1 flex justify-end mr-10 sm:mr-6">
          <button className=" text bg-gradient-to-b from-green-600 via-green-700 to-black text-white px-2 py-2 text-[6px] rounded-full flex items-center gap-2 shadow-md text-xs sm:text-sm md:text-base">
            Try NoNestCode Free
            <img
              src="/assets/rocket.svg"
              alt="Rocket"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
        </div>
      </div>

      <h1 className="letter absolute w-full px-4 text-center font-bold z-10 flex flex-col justify-center items-center
        text-[1.8rem] leading-[2.7rem] top-[6rem]
        sm:text-[2.5rem] sm:leading-[3.5rem]
        md:text-[3.4rem] md:leading-[5rem]
        lg:text-[4.7rem] lg:leading-[7rem] lg:top-[8.5rem]
        xl:text-[4.7rem] xl:leading-[8rem]
        between990:text-[3.2rem] between990:leading-[5rem] between990:top-20rem">
          <div
              ref={line1Ref}
              className="flex flex-wrap overflow-hidden mb-12"
              style={{ lineHeight: 1 }}
            >
              {line1Text.map((item, index) => (
                <span key={index} className="overflow-hidden">
                  <span
                    className={`letter inline-block text-gray-800 ${
                      item.className || ""
                    }`}
                  >
                    {item.char === " " ? "\u00A0" : item.char}
                  </span>
                </span>
              ))}
            </div>
          <div
              ref={line2Ref}
              className="flex flex-wrap overflow-hidden mb-12"
              style={{ lineHeight: 1 }}
            >
              {line2Text.map((item, index) => (
                <span key={index} className="overflow-hidden">
                  <span
                    className={`letter inline-block text-[#10B981] ${
                      item.className || ""
                    }`}
                  >
                    {item.char === " " ? "\u00A0" : item.char}
                  </span>
                </span>
              ))}
            </div>
            <div className="flex flex-row">
          <div
              ref={line3Ref}
              className="flex flex-wrap overflow-hidden bg-[url('/assets/bg.png')] bg-no-repeat bg-[length:150%_310%] bg-center"
              style={{ lineHeight: 1 }}
            >
              {line3Text.map((item, index) => (
                <span key={index} className="overflow-hidden">
                  <span
                    className={`letter inline-block text-gray-800 bg-[url('/assets/bg.png')] ${
                      item.className || ""
                    }`}
                  >
                    {item.char === " " ? "\u00A0" : item.char}
                  </span>
                </span>
              ))}
            </div>
            <div
              ref={line4Ref}
              className="flex flex-wrap overflow-hidden"
              style={{ lineHeight: 1 }}
            >
              {line4Text.map((item, index) => (
                <span key={index} className="overflow-hidden">
                  <span
                    className={`letter inline-block text-gray-800 ${
                      item.className || ""
                    }`}
                  >
                    {item.char === " " ? "\u00A0" : item.char}
                  </span>
                </span>
              ))}
            </div>
            </div>
      </h1>

      <p className=" text absolute w-full px-4 text-center text-gray-700 z-10
        text-sm top-[20rem]
        sm:text-base sm:top-[21rem]
        md:text-[1rem] md:top-[27rem]
        lg:text-xl lg:top-[50%]
        xl:top-[40%]">
        Build custom tools effortlessly for any industry—fast, flexible, <br className="hidden sm:block" />
        scalable, and beautifully simple.
      </p>

      
      <button className="text absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-green-700 via-green-800 to-black text-white px-6 py-2 rounded-full flex items-center gap-1 shadow-md z-10
        text-[0.5rem] top-[23rem]
        sm:text-base sm:top-[25rem]
        md:top-[31rem]
        lg:top-[56%]
        xl:top-[46%]">
        Start Free Trial
        <img
          src="/assets/rocket.svg"
          alt="Rocket"
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
      </button>

     
      <img
        src="/assets/click.gif"
        alt=""
        className="text absolute left-1/2 w-[4.5rem] h-[4.5rem] z-10
          top-[22rem]
          sm:top-[25rem]
          md:top-[30rem]
          lg:top-[55%]
          xl:top-[45%]"
      />

      
      <div className="absolute rounded-full bg-[#D3FFB9] z-0
        h-[15vh] w-[14vw] top-[62vh] right-[1vw]
        sm:h-[20vh] sm:w-[17vw] sm:top-[73vh]
        md:h-[29vh] md:w-[24vw] md:top-[44%]
        lg:h-[25vh] lg:w-[21vw] lg:top-[58%]
        xl:h-[30vh] xl:w-[15vw] xl:top-[48%]">
      </div>

      
      <div className="absolute left-[1vw] rounded-full bg-[#D3FFB9] z-0
        h-[15vh] w-[14vw] bottom-[72vh]
        sm:h-[20vh] sm:w-[17vw] sm:top-[105vh]
        md:h-[29vh] md:w-[24vw] md:top-[75%]
        lg:h-[25vh] lg:w-[21vw] lg:top-[97%] lg:left-0
        xl:h-[30vh] xl:w-[15vw] xl:top-[87%]">
      </div>

      
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bg-gray-100 rounded-2xl z-10
          w-[82vw] h-[35vh] top-[69vh]
          sm:top-[80vh]
          md:h-[58vh] md:top-[50%]
          lg:w-[87vw] lg:h-[76vh] lg:top-[64%]
          xl:top-[54%]"
        style={{
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <HeroAnimation />
      </div>
    </section>
  );
}