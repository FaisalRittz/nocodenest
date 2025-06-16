import React from "react";
import SeoAnimation from "./animation/SeoAnimation";

export default function Effort() {
  return (
    <div className="min-h-[110vh] w-full bg-[#f4f5f7] flex flex-col items-center px-[clamp(1rem,4vw,3rem)] py-[clamp(4rem,8vh,6rem)]">
      {/* Wrapper with responsive direction */}
      <div className="flex flex-col lg:flex-row-reverse w-full h-full relative items-center justify-center gap-[clamp(2rem,5vw,4rem)]">
        {/* Text Section - Right on desktop, Top on mobile */}
        <div className="w-full lg:w-1/2 px-[clamp(1rem,4vw,2rem)] py-[clamp(1rem,4vh,2rem)]">
          <h1 className="text-[clamp(2rem,4vw,3rem)] text-gray-900 font-extrabold mb-[clamp(1.2rem,2vh,2rem)] leading-tight">
            Less Effort More Power
          </h1>

          {/* Block 1 */}
          <div className="mb-[clamp(1.2rem,2vh,2rem)]">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] text-emerald-500 font-extrabold mb-3">
              SEO Management
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-500 font-medium leading-relaxed">
              Helps your store show up on Google. Add titles,
              <br className="sm:hidden" />
              descriptions, and keywords—no expert needed.
              <br className="sm:hidden" />
              More visibility, more traffic.
            </p>
          </div>

          {/* Block 2 */}
          <div className="mb-[clamp(1.2rem,2vh,2rem)]">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] text-emerald-500 font-extrabold mb-3">
              Bulk Product Upload
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-500 font-medium leading-relaxed">
              Upload hundreds of products at once using Excel.
              <br className="sm:hidden" />
              Add details like price, size, color, and discounts—
              <br className="sm:hidden" />
              all in one go.
            </p>
          </div>

          {/* Block 3 */}
          <div className="mb-[clamp(1.2rem,2vh,2rem)]">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] text-emerald-500 font-extrabold mb-3">
              Role-Based Access Control
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-500 font-medium leading-relaxed">
              Give the right access to the right team members.
              <br className="sm:hidden" />
              Control who can edit products, view orders, or
              <br className="sm:hidden" />
              manage settings—secure and simple.
            </p>
          </div>
        </div>

        {/* Animation Section - Left on desktop, Bottom on mobile */}
        <div className="relative w-full lg:w-1/2 h-[clamp(22rem,55vh,32rem)] flex items-center justify-center px-4">
          {/* Top Circle */}
          <div
            className="absolute rounded-full bg-[rgba(204,165,255,0.75)] z-0
              h-28 w-28 sm:h-36 sm:w-36 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44
              top-[-3rem] sm:top-[-3.5rem] md:top-[-2.5rem] lg:top-[-10rem] xl:top-[-8.5rem]
              left-[-0.5rem] sm:left-[-1rem] md:left-[-1.5rem] lg:left-[-2.6rem] xl:left-[-2.5rem]"
          />

          {/* Bottom Circle */}
          <div
            className="absolute rounded-full bg-[rgba(204,165,255,0.75)] z-0
              h-28 w-28 sm:h-36 sm:w-36 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44
              bottom-[-12.5rem] sm:bottom-[-14rem] md:bottom-[-21rem] lg:bottom-[-14rem] xl:bottom-[-17.5rem]
              left-[78%] sm:left-[80%] md:left-[83%] lg:left-[78%] xl:left-[80%]"
          />

          {/* White Animation Box */}
          <div className="h-[80vh] w-[87%] lg:w-[97%] lg:top-[-7rem] md:h-[90vh] xl:top-[-4rem] top-[0rem] absolute rounded-2xl bg-white shadow-[-4px_4px_8px_rgba(0,0,1,0.3)] z-10 flex items-center justify-center sm:mt-1 md:mt-3">
            <SeoAnimation />
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="mt-60  sm:mt-67 md:mt-77 px-6 py-3 w-fit rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform duration-200">
        Compare With Other Platform
      </button>
    </div>
  );
}
