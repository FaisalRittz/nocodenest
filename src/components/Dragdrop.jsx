import React from "react";
import DragAnimation from "./animation/DragAnimation";

export default function Dragdrop() {
  return (
    <div className="min-h-[80vh] w-full bg-[#f5f7fa] flex flex-col items-center px-[clamp(1rem,4vw,3rem)] py-[clamp(2rem,5vh,4rem)]">
      <h2 className="text-[clamp(1.8rem,4vw,2.7rem)] text-emerald-500 font-extrabold text-center mb-[clamp(1.5rem,5vh,3rem)]">
        Why Choose No Code Nest?
      </h2>

      <div className="flex flex-col lg:flex-row w-full h-full relative items-center justify-center gap-[clamp(2rem,5vw,4rem)]">
        <div className="relative w-full lg:w-1/2 h-[clamp(22rem,55vh,32rem)] flex items-center justify-center px-4">
          <div
            className="
              absolute rounded-full bg-[rgb(255,244,172)] z-0
              h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44
              top-[-1rem] sm:top-[-2rem] md:top-[-2.5rem] lg:top-[-3rem] xl:top-[-3.5rem]
              left-[-0.5rem] sm:left-[-1rem] md:left-[-1.5rem] lg:left-[-2rem] xl:left-[-2.5rem]
            "
          />

          <div
            className="
              absolute rounded-full bg-[rgb(255,244,172)] z-0
              h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44
              bottom-[-1.5rem] sm:bottom-[-2rem] md:bottom-[-2.5rem] lg:bottom-[-3rem] xl:bottom-[-3.5rem]
              left-[80%] sm:left-[80%] md:left-[83%] lg:left-[78%] xl:left-[80%]
            "
          />

          <div className="h-[85%] w-[90%] rounded-2xl bg-white shadow-[-4px_4px_8px_rgba(0,0,1,0.3)] z-10 flex items-center justify-center">
            <DragAnimation />
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-[clamp(1rem,4vw,2rem)] py-[clamp(1rem,4vh,2rem)]">
          <div className="mb-[clamp(1rem,3vh,2rem)]">
            <h1 className="text-[clamp(2rem,4vw,2.8rem)] text-gray-900 font-extrabold">
              Drag And Drop
            </h1>
          </div>

          <div className="text-[clamp(1rem,2vw,1.3rem)] text-gray-500 font-medium space-y-[clamp(1rem,2vh,1.5rem)] leading-relaxed">
            <p>
              <span className="text-emerald-500 font-bold">•</span> Simply drag
              sections like banners, products, or videos where you want them—no
              code needed.
            </p>
            <p>
              <span className="text-emerald-500 font-bold">•</span> Instantly
              see changes live as you move blocks around the page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
