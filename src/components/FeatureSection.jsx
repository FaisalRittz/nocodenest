"use client";
import React from "react";

export default function FeatureSection() {
  const [hoverStates, setHoverStates] = React.useState(Array(10).fill(false));

  const toggleHover = (index, val) => {
    const newStates = [...hoverStates];
    newStates[index] = val;
    setHoverStates(newStates);
  };

  const cardsData = [
    {
      title: "Instant Storefront Creation",
      hoverText: "Go live in minutes with just an Excel sheet.",
      image: "/assets/creation.svg",
      customClass: "",
    },
    {
      title: "Drag & Drop Builder",
      hoverText: "Easily design pages—no coding needed",
      image: "/assets/drag.svg",
      customClass: "",
    },
    {
      title: "AI Powered Chatbot",
      hoverText: "Smart, built-in AI for sales & support.",
      image: "/assets/chatbot.svg",
      customClass: "",
    },
    {
      title: "3D Product Viewer",
      hoverText: "Let customers explore products in 3D.",
      image: "/assets/3d.svg",
      customClass: "",
    },
    {
      title: "Industry-Specific Dashboards",
      hoverText: "Tailored analytics for your business type.",
      image: "/assets/dashboard.svg",
      customClass: "",
    },
    {
      title: "Role-Based Access",
      hoverText: "Control what each user can view or edit.",
      image: "/assets/role.svg",
      customClass: "",
    },
    {
      title: "Visual Commerce Tools",
      hoverText: "Reels, video, and popup banners included.",
      image: "/assets/visual.svg",
      customClass: "",
    },
    {
      title: "Bulk Excel Upload",
      hoverText: "Add thousands of products instantly",
      image: "/assets/bulk.svg",
      customClass: "",
    },
    {
      title: "Auto-Price Engine",
      hoverText: "Real-time price logic for metals, grades.",
      image: "/assets/autoprice.svg",
      customClass: "",
    },
    {
      title: "Built-In SEO Management",
      hoverText: "Boost visibility with native SEO tools.",
      image: "/assets/seo.svg",
      customClass: "",
    },
  ];

  return (
    <div className="bg-[#f5f7fa] flex items-center justify-center min-h-screen w-full px-2 sm:px-4 py-4">
      <div className="bg-[#0a0d11] text-white font-bold flex flex-col items-center justify-center w-full max-w-[1300px] rounded-3xl p-2 sm:p-4 xl:p-7 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {cardsData.slice(0, 4).map((card, i) => (
            <FeatureCard
              key={i}
              {...card}
              isHovered={hoverStates[i]}
              setIsHovered={(val) => toggleHover(i, val)}
            />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-4 sm:gap-6 my-4">
          <div className="w-full lg:w-1/4 flex justify-center">
            <FeatureCard
              {...cardsData[4]}
              isHovered={hoverStates[4]}
              setIsHovered={(val) => toggleHover(4, val)}
            />
          </div>

          <div className="relative flex flex-col items-center justify-center w-full lg:w-2/4 my-4 lg:my-0">
            <h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-green-700 via-emerald-800 to-black bg-clip-text text-transparent animate-gradient text-center z-10"
              style={{
                WebkitTextStroke: "1px white",
                WebkitTextFillColor: "transparent",
              }}
            >
              FEATURES
            </h1>
          </div>

          <div className="w-full lg:w-1/4 flex justify-center">
            <FeatureCard
              {...cardsData[5]}
              isHovered={hoverStates[5]}
              setIsHovered={(val) => toggleHover(5, val)}
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-[1300px] w-full">
            {cardsData.slice(6, 10).map((card, idx) => {
              const actualIndex = 6 + idx;
              return (
                <FeatureCard
                  key={actualIndex}
                  {...card}
                  isHovered={hoverStates[actualIndex]}
                  setIsHovered={(val) => toggleHover(actualIndex, val)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  hoverText,
  image,
  isHovered,
  setIsHovered,
  customClass,
}) {
  return (
    <div
      className={`border-3 border-white bg-transparent ${customClass} rounded-2xl p-3 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400 transform ${
        isHovered ? "scale-105" : "scale-100"
      } w-full min-h-[180px] sm:min-h-[210px] md:min-h-[230px] max-w-full sm:max-w-[260px] md:max-w-[320px]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-center">
        {isHovered ? hoverText : title}
      </div>
      <div className="h-[40px] sm:h-[50px] md:h-[60px] lg:h-[80px] w-auto mx-auto flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className={`h-full w-auto transition-transform duration-300 ${
            isHovered ? "scale-90" : "scale-100"
          }`}
        />
      </div>
    </div>
  );
}
