import React from "react";

export default function Testimonial() {
  return (
    <div className="min-h-screen w-full bg-[#f2f2f2] text-black flex items-center justify-center overflow-hidden">
      <div className="absolute h-[90vh] w-[90vw] bg-white rounded-4xl shadow-xl">
        {[
          { src: "/assets/img1.jpg", className: "top-[20%] left-[5%]" },
          { src: "/assets/img3.jpg", className: "bottom-[31%] left-[5%]" },
          { src: "/assets/img8.avif", className: "top-[36%] left-[14%]" },
          { src: "/assets/img11.jpg", className: "top-[11%] left-[14%]" },
          { src: "/assets/img13.avif", className: "top-[18%] left-[23%]" },
          { src: "/assets/img7.avif", className: "top-[8%] left-[32%]" },
          { src: "/assets/img5.jpeg", className: "top-[15%] left-[41%]" },
          {
            src: "/assets/img14.jpg",
            className: "top-[3%] left-[50%] w-[124px]",
          },
          { src: "/assets/img2.jpg", className: "top-[20%] right-[5%]" },
          { src: "/assets/img6.jpeg", className: "bottom-[30.3%] right-[5%]" },
          { src: "/assets/img12.jpg", className: "top-[36%] right-[14%]" },
          { src: "/assets/img10.jpg", className: "top-[11%] right-[14%]" },
          { src: "/assets/img4.jpeg", className: "top-[18%] right-[23%]" },
          { src: "/assets/img9.jpg", className: "top-[8%] right-[32%]" },
        ].map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`img${i + 1}`}
            className={`absolute ${img.className} h-[160px] w-[120px] object-cover rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-100 hover:translate-y-2 `}
          />
        ))}

        <div className="h-[128px] w-[120px] absolute bg-gray-100 rounded-b-xl  left-[5%]"></div>
        <div className="h-[70px] w-[120px] absolute bg-gray-100 rounded-b-xl  left-[14%]"></div>
        <div className="h-[115px] w-[120px] absolute bg-gray-100 rounded-b-xl  left-[23%]"></div>
        <div className="h-[49px] w-[120px] absolute bg-gray-100 rounded-b-xl  left-[32%]"></div>
        <div className="h-[95px] w-[120px] absolute bg-gray-100 rounded-b-xl  left-[41%]"></div>
        <div className="h-[16px] w-[124px] absolute bg-[#f3f4f5] rounded-b-xl  left-[50%]"></div>
        <div className="h-[49px] w-[120px] absolute bg-[#f3f4f5] rounded-b-xl  right-[32%]"></div>
        <div className="h-[115px] w-[120px] absolute bg-[#f3f4f5] rounded-b-xl  right-[23%]"></div>
        <div className="h-[70px] w-[120px] absolute bg-[#f3f4f5] rounded-b-xl  right-[14%]"></div>
        <div className="h-[128px] w-[120px] absolute bg-[#f3f4f5] rounded-b-xl  right-[5%]"></div>

        <div className="absolute top-[50%] left-[35%] leading-16  text-[3rem] text-center font-bold">
          Trusted By Leaders <br />{" "}
          <span className="text-green-600">From Various Industries</span>
        </div>
        <p className="absolute text-black bottom-[21%] text-center left-[42%]">
          Learn why professionals trust our solutions to
          <br /> complete their customer journeys.
        </p>
        <button
          className="absolute bottom-[12%] left-[48%] px-6 py-3 text-green-800 font-semibold rounded-xl 
  bg-[#e0f5ec] shadow-[8px_8px_15px_#c2ded1,_-8px_-8px_15px_#ffffff] 
  hover:shadow-[inset_8px_8px_15px_#c2ded1,_inset_-8px_-8px_15px_#ffffff] 
  transition-all duration-300"
        >
          Testimonials
        </button>
      </div>
    </div>
  );
}
