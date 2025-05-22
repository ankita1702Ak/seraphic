import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple-primary text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center flex-wrap">
          <div>
            <h2 className="text-2xl font-bold">Kidsbook</h2>
          </div>

          <div>
            <ul className="flex  gap-6 mt-4 md:mt-0">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition font-light"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-gray-300 hover:text-white transition font-light"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-white transition font-light"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-white transition font-light"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
