import React from "react";

export default function Launch() {
  return (
    <div className="min-h-[70vh] w-full bg-[#f5f7fa] flex flex-col items-center justify-center px-[clamp(1rem,5vw,4rem)] py-[clamp(2rem,6vh,5rem)] text-center">
      
      
      <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight font-poppins">
        <span className="text-gray-800">Ready to </span>
        <span className="text-emerald-500">launch your</span>
      </h1>

      
      <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight font-poppins mt-[clamp(1rem,3vh,2rem)]">
        <span className="text-emerald-500">store, </span>
        <span className="text-gray-800">your way?</span>
      </h1>

   
      <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-semibold text-gray-800 mt-[clamp(2rem,6vh,3.5rem)]">
        NO Code. No Compromise.
      </h2>

      
      <button className="mt-[clamp(2rem,5vh,3rem)] px-6 py-3 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform duration-200">
        Compare With Other Platform
      </button>
    </div>
  );
}
 
