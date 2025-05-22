import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { images } from "../../Assets/assets";

const Section1 = () => {
  return (
    <div className="bg-purple-dark text-white relative">
      {/* Why we started section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden relative">
              <img
                src={images.why}
                alt="Icon 2"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why we started Once <br/> Upon My Story?
            </h2>

            <div className="space-y-4">
              <p className="text-gray-200">
                Our journey started with a simple wish: to create something
                truly personal for the little ones. Other companies only offered
                basic name customizations, with no real connection to real-life
                experiences. So, we decided to take matters into our own hands.
              </p>

              <p className="text-gray-200">
                We mastered tools like Photoshop, Canva, DALL-E and Amazon KDP
                to craft fully personalized, heartfelt stories that bring your
                loved one's unique adventures to life.
              </p>

              <p className="text-gray-200">
                Once Upon My Story's mission is simple: to help you gift your
                loved one a truly one-of-a-kind story at a fair price.
              </p>
            </div>

            <button className="mt-8 bg-lime-accent text-purple-primary px-6 py-3 rounded-full font-bold flex items-center">
              Create Book
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
