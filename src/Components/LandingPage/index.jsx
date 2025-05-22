import React from "react";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { icons, images } from "../../Assets/assets";
import Section1 from "./Section1";
import {
  MdOutlineArrowForwardIos,
  MdKeyboardArrowDown,
  MdOutlineRefresh,
} from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";

const LandingPage = () => {
  return (
    <>
      <div className="bg-purple-dark min-h-screen flex flex-col relative">
        {/* Hero Section */}
        <div
          className="relative overflow-hidden py-20 md:py-0"
          style={{
            backgroundImage: `url(${images.star})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-20 left-40 hidden md:block">
            <img
              src={icons.arrow2}
              alt="Decorative line"
              className="w-24 h-24 object-contain transform rotate-75"
            />
          </div>
          <div className="absolute top-40 right-40 hidden md:block">
            <img
              src={icons.arrow3}
              alt="Decorative line"
              className="w-24 h-24 object-contain transform -rotate-15"
            />
          </div>

          <div className="container mx-auto px-4">
            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-16">
              Crafting Fairy Tales
              <br />
              from Real Life
            </h1>

            <div className="flex flex-col lg:flex-row items-center justify-between relative">
              {/* Left side - Process steps */}
              <div className="w-full lg:w-1/3 text-white mb-12 lg:mb-0">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  Process <MdKeyboardArrowDown className="ml-2" />
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center bg-white bg-opacity-10 rounded-lg p-3">
                    <div className="bg-purple-400 w-12 h-12 rounded-md flex items-center justify-center text-white font-bold mr-4">
                      1
                    </div>
                    <span className="flex-grow">Share Your Story</span>
                    <BsArrowUpRight className="text-lg" />
                  </div>

                  <div className="flex items-center bg-purple-dark bg-opacity-50 rounded-lg p-3">
                    <div className="bg-lime-accent w-12 h-12 rounded-md flex items-center justify-center text-purple-primary font-bold mr-4">
                      2
                    </div>
                    <span className="flex-grow">We Bring It To Life</span>
                    <MdOutlineArrowForwardIos />
                  </div>

                  <div className="flex items-center bg-purple-dark bg-opacity-50 rounded-lg p-3">
                    <div className="bg-blue-400 w-12 h-12 rounded-md flex items-center justify-center text-white font-bold mr-4">
                      3
                    </div>
                    <span className="flex-grow">We Deliver It to You</span>
                    <MdOutlineArrowForwardIos />
                  </div>
                </div>
              </div>

              {/* Center - Book image */}
              <div className="w-full lg:w-1/3 flex justify-center relative">
                <div>
                  <button className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-lime-accent text-purple-primary px-6 py-3 rounded-full font-bold flex items-center">
                    Create Book
                    <BsArrowUpRight className="ml-2" />
                  </button>

                  <img
                    src={images.bookImage}
                    alt="Personalized Book"
                    className="w-64 md:w-80 relative z-10 transform rotate-6 hidden md:block"
                  />
                </div>
              </div>

              {/* Right side - Adventure card */}
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                <div className="bg-purple-dark rounded-lg p-4 text-white max-w-xs relative">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-md mr-3 overflow-hidden">
                      <img
                        src={images.imageLogo}
                        alt="Adventure"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold">Adventure Awaits</h3>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor consectetur. Potenti pharetra mi convallis
                    dolor eu. Sit gravida pulvinar
                  </p>
                  <button className="mt-3 bg-lime-accent text-purple-primary px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    Regenerate Story
                    <MdOutlineRefresh className="ml-1" />
                  </button>
                  <div className="absolute top-50 left-60">
                    <img
                      src={icons.arrow1}
                      alt="Decorative line"
                      className="w-10 h-10 object-contain transform rotate-65"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Step Process Section */}
        <div className="relative md:py-20 py-0">
          <div className="py-16 relative bg-purplr-dark relative z-10 relative">
            <div className="container mx-auto px-4 ">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                Easy 3-Step Process
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="bg-white rounded-2xl shadow-lg p-16 relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <img
                      src={icons.one}
                      alt="Step 1"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mt-6 mb-4 ">
                    Step 1: Share Your Story
                  </h3>
                  <p className="text-center text-gray-600">
                    Fill in our easy-to-follow form, providing us with your
                    loved one's name, their traits, and a cherished real-life
                    experience or dream adventure you'd like the story to be
                    based on.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-2xl shadow-lg p-16 relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <img
                      src={icons.two}
                      alt="Step 2"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mt-6 mb-4">
                    Step 2: We Bring It to Life
                  </h3>
                  <p className="text-center text-gray-600">
                    Our talented team crafts a fully illustrated, personalized
                    book from your submitted details. Each book is unique,
                    designed specifically around your loved one's experiences.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-2xl shadow-lg p-16 relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <img
                      src={icons.three}
                      alt="Step 3"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mt-6 mb-4">
                    Step 3: We Deliver It to You
                  </h3>
                  <p className="text-center text-gray-600">
                    Your personalized book can be delivered in e-book or
                    paperback format. With paperback, we publish it on Amazon
                    for you, and you keep 75% of profits from sales!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className=" w-full absolute top-100  bottom-0 hidden md:block">
            <img
              src={images.cloud}
              alt="Decorative cloud"
              className="w-full object-contain transform "
            />
          </div>
      </div>

      {/* Section1 Component */}
      <Section1 />

      {/* Section2 Component */}
      <Section2 />

      {/* Section3 Component - FAQ */}
      <Section3 />

      {/* Section4 Component -  What's Included */}
      <Section4 />
    </>
  );
};

export default LandingPage;
