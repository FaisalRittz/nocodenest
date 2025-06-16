import React from "react";

export default function Footer() {
  return (
    <div className="min-h-screen w-full bg-[#10b981] flex flex-col items-center px-[clamp(1rem,4vw,5rem)] py-[clamp(2rem,6vh,5rem)] text-center gap-10">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-10">
        <div className="flex flex-col items-center lg:items-start gap-6">
          <a
            className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-white"
            href="#"
          >
            hello@nocodenest.io
          </a>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <a className="text-[clamp(1rem,2vw,1.5rem)] text-white" href="#">
              Features
            </a>
            <a className="text-[clamp(1rem,2vw,1.5rem)] text-white" href="#">
              Why Us
            </a>
            <a className="text-[clamp(1rem,2vw,1.5rem)] text-white" href="#">
              Testimonials
            </a>
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <form className="bg-white rounded-full flex flex-col sm:flex-row items-center px-4 py-2 shadow-md gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-full outline-none text-gray-800 placeholder-gray-500 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-800 text-white font-medium px-6 py-2 rounded-full transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        <a className="text-[clamp(1.2rem,3vw,2rem)] text-white" href="#">
          Instagram
        </a>
        <h2 className="text-[clamp(1.2rem,3vw,2rem)] text-white">X</h2>
        <a className="text-[clamp(1.2rem,3vw,2rem)] text-white" href="#">
          YouTube
        </a>
      </div>

      <div className="h-[3px] w-[80%] bg-gradient-to-r from-transparent via-white to-transparent" />

      <div>
        <h1 className="text-[clamp(3rem,10vw,9rem)] font-extrabold text-white">
          No Code Nest
        </h1>
      </div>

      <div>
        <h2 className="text-[clamp(1rem,2vw,1.5rem)] text-white">
          © 2025 NoNestCode. All rights reserved.
        </h2>
      </div>
    </div>
  );
}
