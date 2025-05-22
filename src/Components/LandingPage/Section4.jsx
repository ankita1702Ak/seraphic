import React from "react";
import { icons } from "../../Assets/assets";
import PrimaryButton from "../Common/PrimaryButton";

const Section4 = () => {
  return (
    <div className="bg-purple-dark text-white py-10">
      <div className="container mx-auto px-4">
        {/* Header row with title and button */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-0">
            What is Included in Your Book?
          </h2>

          <div className="md:ml-4">
            <PrimaryButton
              onClick={() => (window.location.href = "/get-started")}
            >
              Create Book
            </PrimaryButton>
          </div>
        </div>

        {/* Content grid - full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="flex items-start   p-6 rounded-2xl">
            <div className="w-15 h-15 mr-4 flex-shrink-0">
              <img
                src={icons.one}
                alt="Icon 1"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Story Development:</h3>
              <p className="text-sm text-gray-200">
                We craft an exclusive 400-word story for your child, inspired by
                the unique information you provide about them.
              </p>
            </div>
          </div>

          <div className="flex items-start   p-6 rounded-2xl">
            <div className="w-15 h-15 mr-4 flex-shrink-0">
              <img
                src={icons.two}
                alt="Icon 2"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Character Designs:</h3>
              <p className="text-sm text-gray-200">
                Our artists create unique character designs based on your
                child's features and personality.
              </p>
            </div>
          </div>

          <div className="flex items-start   p-6 rounded-2xl">
            <div className="w-15 h-15 mr-4 flex-shrink-0">
              <img
                src={icons.three}
                alt="Icon 3"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Illustrations:</h3>
              <p className="text-sm text-gray-200">
                We bring the story to life with 8 custom illustrations,
                capturing the adventures of your child.
              </p>
            </div>
          </div>

          <div className="flex items-start  p-6 rounded-2xl">
            <div className="w-15 h-15 mr-4 flex-shrink-0">
              <img
                src={icons.four}
                alt="Icon 4"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                Delivered in either e-book or paperback format
              </h3>
              <p className="text-sm text-gray-200">
                Choose the format that works best for you and your child.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
