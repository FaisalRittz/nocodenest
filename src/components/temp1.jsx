"use client";
import React from "react";
import HeroAnimation from "./animation/HeroAnimation";

export default function Hero() {
  return (
    <section className="relative h-[182vh] bg-[#f5f7fa] text-black overflow-x-hidden scrollbar">
      
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 z-0">
        {Array.from({ length: 131 }).map((_, i) => (
          <div
            key={i}
            className="w-[8rem] h-[4rem] sm:w-[12rem] sm:h-[5rem] md:w-[16rem] md:h-[6rem] lg:w-[20rem] lg:h-[7rem] xl:w-[26rem] xl:h-[8rem] bg-gray-100 border-[1px] sm:border-[1.5px] md:border-[2px] border-white rounded-sm"
          ></div>
        ))}
      </div>

      
      <div className="absolute top-0 w-full px-4 sm:px-6 py-4 flex justify-between items-center z-10">
        <div className="flex-1 flex justify-start ml-2 sm:ml-6">
          <h1 className="font-extrabold text-[11px] sm:text-2xl md:text-2xl">
            No Code Nest
          </h1>
        </div>

        <div className="flex-1 hidden md:flex justify-center gap-4 md:gap-8 lg:gap-12 text-base md:text-lg lg:text-2xl">
          <h1>Why Us</h1>
          <h1>Testimonial</h1>
        </div>

        <div className="flex-1 flex justify-end mr-10 sm:mr-6">
          <button className="bg-gradient-to-b from-green-600 via-green-700 to-black text-white px-2 py-2 text-[6px] rounded-full flex items-center gap-2 shadow-md text-xs sm:text-sm md:text-base">
            Try NoNestCode Free
            <img
              src="/assets/rocket.svg"
              alt="Rocket"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
        </div>
      </div>

      <h1 className="absolute w-full px-4 text-center font-bold z-10
        text-[1.8rem] leading-[2.7rem] top-[6rem]
        sm:text-[2.5rem] sm:leading-[3.5rem]
        md:text-[3.4rem] md:leading-[5rem]
        lg:text-[4.7rem] lg:leading-[7rem] lg:top-[8.5rem]
        xl:text-[4.7rem] xl:leading-[8rem]
        between990:text-[3.2rem] between990:leading-[5rem] between990:top-20rem">
        Launch Your Website or Online Store <br />
        <span className="text-[#10B981]">In One Minute</span> <br />
        <span className="relative inline-block">
          <span className="bg-[url('/assets/bg.png')] bg-[length:120%_310%] bg-no-repeat bg-left pl-16 pr-2">
            No Code
          </span>
          , Infinite Power
        </span>
      </h1>

      <p className="absolute w-full px-4 text-center text-gray-700 z-10
        text-sm top-[20rem]
        sm:text-base sm:top-[21rem]
        md:text-[1rem] md:top-[27rem]
        lg:text-xl lg:top-[50%]
        xl:top-[40%]">
        Build custom tools effortlessly for any industry—fast, flexible, <br className="hidden sm:block" />
        scalable, and beautifully simple.
      </p>

      
      <button className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-green-700 via-green-800 to-black text-white px-6 py-2 rounded-full flex items-center gap-1 shadow-md z-10
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
        className="absolute left-1/2 w-[4.5rem] h-[4.5rem] z-10
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
        xl:h-[30vh] xl:w-[20vw] xl:top-[48%]">
      </div>

      
      <div className="absolute left-[1vw] rounded-full bg-[#D3FFB9] z-0
        h-[15vh] w-[14vw] bottom-[72vh]
        sm:h-[20vh] sm:w-[17vw] sm:top-[105vh]
        md:h-[29vh] md:w-[24vw] md:top-[75%]
        lg:h-[25vh] lg:w-[21vw] lg:top-[97%] lg:left-0
        xl:h-[30vh] xl:w-[20vw] xl:top-[87%]">
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