import React from "react";
import AutomAnime from "./animation/AutomAnime";

export default function Automation() {
  return (
    <div className="min-h-[80vh] w-full bg-[#f5f7fa] flex flex-col lg:flex-row items-center px-[clamp(1rem,4vw,3rem)] py-[clamp(2rem,5vh,4rem)] overflow-hidden">

      
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="mb-[clamp(1rem,3vh,2rem)]">
          <h1 className="text-[clamp(2rem,4vw,2.8rem)] text-gray-900 font-extrabold">
            Built-In Animation
          </h1>
        </div>

        <div className="text-[clamp(1rem,2vw,1.3rem)] text-gray-500 font-medium space-y-[clamp(1rem,2vh,1.5rem)] leading-relaxed">
          <p>
            <span className="text-emerald-500 font-bold">•</span> Chatbot replies to customers for you—<br className="sm:hidden" />
            Automatically.
          </p>
          <p>
            <span className="text-emerald-500 font-bold">•</span> WhatsApp messages are sent without you lifting <br className="sm:hidden" />
            a finger.
          </p>
          <p>
            <span className="text-emerald-500 font-bold">•</span> Product prices update on their own when gold <br className="sm:hidden" />
            rates change.
          </p>
        </div>
      </div>

      
      <div className="relative w-full lg:w-1/2 h-[clamp(22rem,55vh,32rem)] flex items-center justify-center mt-10 lg:mt-0">
       
        <div
          className="absolute rounded-full bg-[rgba(211,255,185,0.85)] z-0
          h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44
          top-[-1rem] sm:top-[-2rem] md:top-[-2.5rem] lg:top-[-3rem] xl:top-[-3.5rem]
          right-[-0.5rem] sm:right-[-1rem] md:right-[-1.5rem] lg:right-[-2rem] xl:right-[-2.5rem]"
        />

        
        <div
          className="absolute rounded-full bg-[rgba(211,255,185,0.85)] z-0
          h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44
          bottom-[-1rem] sm:bottom-[-2rem] md:bottom-[-2.5rem] lg:bottom-[-3rem] xl:bottom-[-3.5rem]
          right-[80%] sm:right-[80%] md:right-[83%] lg:right-[78%] xl:right-[80%]"
        />

       
        <div className="h-[85%] w-[90%] rounded-2xl bg-white shadow-[-4px_4px_8px_rgba(0,0,1,0.3)] z-10 flex items-center justify-center">
          <AutomAnime />
        </div>
      </div>
    </div>
  );
}

