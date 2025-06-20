import React from "react";

export default function Testimonial() {
  return (
    <div className="min-h-screen w-full bg-[#f2f2f2] text-black flex items-center justify-center overflow-hidden">
      <div className="absolute h-[90vh] w-[90vw] bg-white rounded-4xl shadow-xl">
        {[
          {
            src: "/assets/img1.jpg",
            className: `
              top-[15%] left-[5%]
              sm:top-[17%]
              xl:top-[20%] xl:left-[5%]
              at-980-1279:width-15p
            `
          },
          {
            src: "/assets/img3.jpg",
            className: `
              bottom-[31%] left-[5%] opacity-0
              xl:bottom-[31%] xl:top-[47%] xl:left-[5%] xl:opacity-100
            `
          },
          {
            src: "/assets/img8.avif",
            className: `
              top-[27.8%] left-[5%]
              sm:left-[5%]
              md:top-[37%]
              xl:left-[14%] xl:top-[39.2%]
              at-830-979:top-40 at-980-1279:width-15p at-980-1279:top-40
            `
          },
          {
            src: "/assets/img11.jpg",
            className: `
              top-[11%] left-[14%] opacity-0
              sm:left-[23%] sm:top-[11.2%]
              xl:left-[14%] xl:top-[12.2%] xl:opacity-100
              at-980-1279:opacity-100
            `
          },
          {
            src: "/assets/img13.avif",
            className: `
              top-[18%] left-[23%]
              sm:top-[30%]
              md:left-[22.6%]
              xl:top-[19.5%] xl:left-[23%]
              at-980-1279:width-15p
            `
          },
          {
            src: "/assets/img7.avif",
            className: `
              top-[6%] left-[23%]
              sm:opacity-0
              xl:top-[8.5%] xl:left-[32%] xl:opacity-100
            `
          },
          {
            src: "/assets/img5.jpeg",
            className: `
              top-[15%] left-[41.3%]
              sm:opacity-0
              xl:top-[16.3%] xl:left-[41%] xl:opacity-100
            `
          },
          {
            src: "/assets/img14.jpg",
            className: `
              top-[3%] left-[41.3%] w-[60px]
              sm:left-[40%] sm:w-[130px] sm:top-[23%]
              md:left-[40.5%] md:w-[134px]
              xl:top-[3%] xl:left-[50%] xl:w-[104px]
              at-830:left-8 at-830-979:width-145p img14-980-1279
            `
          },
          {
            src: "/assets/img2.jpg",
            className: `
              top-[15%] right-[5%]
              xl:top-[22%] xl:right-[5%]
              at-980-1279:width-15p
            `
          },
          {
            src: "/assets/img6.jpeg",
            className: `
              top-[27.8%] right-[5%]
              sm:top-[39%]
              md:top-[40.3%]
              xl:top-[49.3%] xl:right-[5%]
              at-830-979:mt-12
              at-980-1279:width-15p img6-980-1279
            `
          },
          {
            src: "/assets/img12.jpg",
            className: `
              top-[36%] right-[15%] opacity-0
              sm:opacity-0
              xl:top-[39%] xl:right-[14%] xl:opacity-100
            `
          },
          {
            src: "/assets/img10.jpg",
            className: `
              top-[11%] right-[14%] opacity-0
              sm:opacity-0
              xl:top-[12%] xl:right-[14%] xl:opacity-100
            `
          },
          {
            src: "/assets/img4.jpeg",
            className: `
              top-[18%] right-[23%]
              sm:top-[30%]
              md:right-[22.5%]
              xl:top-[20%] xl:right-[23%]
              at-980-1279:width-15p
            `
          },
          {
            src: "/assets/img9.jpg",
            className: `
              top-[6%] right-[23%]
              sm:top-[11.2%] sm:right-[22%] sm:opacity-0
              xl:top-[8.5%] xl:right-[32.2%] xl:opacity-100
            `
          }
        ].map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`img${i + 1}`}
            className={`
              absolute ${img.className}
              h-[70px] w-[60px]
              sm:h-[120px] sm:w-[100px]
              md:h-[130px] md:w-[120px]
              xl:h-[160px] xl:w-[111px]
              object-cover rounded-xl shadow-md
              transition-transform duration-300 ease-in-out
              hover:scale-100 hover:translate-y-2
            `}
          />
        ))}

        
        <div className="absolute h-[128px] w-[120px] bg-gray-100 rounded-b-xl left-[5%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[118px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[70px] w-[120px] bg-gray-100 rounded-b-xl left-[14%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[70px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[115px] w-[120px] bg-gray-100 rounded-b-xl left-[23%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[115px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[49px] w-[120px] bg-gray-100 rounded-b-xl left-[32%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[49px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[95px] w-[120px] bg-gray-100 rounded-b-xl left-[41%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[95px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[16px] w-[124px] bg-[#f3f4f5] rounded-b-xl left-[50%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[16px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[49px] w-[120px] bg-[#f3f4f5] rounded-b-xl right-[32%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[49px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[115px] w-[120px] bg-[#f3f4f5] rounded-b-xl right-[23%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[115px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[70px] w-[120px] bg-[#f3f4f5] rounded-b-xl right-[14%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[69px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[128px] w-[120px] bg-[#f3f4f5] rounded-b-xl right-[5%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[128px] xl:w-[111px] xl:opacity-100"></div>

        
        <div className="absolute top-[54%] text-[2rem] left-[1%] text-center font-bold -translate-y-1/2
                        sm:top-[65%] sm:left-[20%] sm:text-[2rem] sm:leading-12
                        md:left-[18%] md:text-[2.5rem]
                        xl:left-[30%] xl:text-[3rem]
                        at-830-979:right-8 at-980-1279:right-44
                        leading-10 ">
          Trusted By Leaders <br />
          <span className="text-green-600">From Various Industries</span>
        </div>

        <p className="absolute bottom-[25%] right-[2.3%] text-center text-black text-[1rem]
                      sm:left-[25%] sm:text-[0.9rem]
                      md:top-[75%] md:text-[1.1rem]
                      xl:left-[40%]
                      at-830-979:left-8 at-980-1279:left-44">
          Learn why professionals trust our solutions to
          <br /> complete their customer journeys.
        </p>

        <button className="absolute left-[30%] bottom-[12%] px-6 py-3 text-green-800 font-semibold rounded-xl
                          sm:left-[38%]
                          md:bottom-[9%]
                          xl:left-[45%] xl:bottom-[7%]
                          at-830-979:ml-12 at-830-979:bottom-40
                          at-980-1124:ml-44 at-980-1124:mt-44
                          bg-[#e0f5ec] shadow-[8px_8px_15px_#c2ded1,-8px-8px_15px_#ffffff]
                          hover:shadow-[inset_8px_8px_15px_#c2ded1,inset-8px_-8px_15px_#ffffff]
                          transition-all duration-300">
          Testimonials
        </button>
      </div>
    </div>
  );
}