import React from "react";
import { images, icons } from "../../Assets/assets";

const Section2 = () => {
  return (
    <div className="bg-purple-primary text-white">

      {/* How it Works section */}
      <div className="container mx-auto px-0 py-0 pt-[40px]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How it Works
        </h2>

        <div className="relative">
          {/* Decorative elements */}
          <div className="hidden md:block absolute left-0 top-1/3 transform -translate-x-1/2">
            <img
              src={icons.yellow1}
              alt="Decorative element"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="hidden md:block absolute right-1/2 bottom-1/4 transform translate-x-1/4">
            <img
              src={icons.yellow2}
              alt="Decorative element"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Steps layout - two columns */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column - Steps 1 & 2 stacked */}
            <div className="w-full md:w-1/2 flex flex-col">
              {/* Step 1 */}
              <div className=" p-1 md:p-2 transform transition-transform hover:scale-105 h-full">
                <img
                  src={images.two}
                  alt="Step 1"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Step 2 */}
              <div className=" p-1 md:p-2  transform transition-transform hover:scale-105 h-full">
                <img
                  src={images.one}
                  alt="Step 2"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right column - Step 3 */}
            <div className="w-full md:w-1/2">
              {/* Step 3 */}
              <div className="  transform transition-transform  ">
                <img
                  src={images.three}
                  alt="Step 3"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* CTA Button
          <div className="mt-12 text-center">
            <PrimaryButton onClick={() => window.location.href = '/get-started'}>
              Create Your Book Now
            </PrimaryButton>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section2;
