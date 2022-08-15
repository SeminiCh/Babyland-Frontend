import React from "react";
import logoImage from "../../Assets/imageLogo002.png";

function Footer() {
  return (
    <div className="my-4 pr-5">
      <footer className="p-4 bg-gray-700 sm:p-6 dark:bg-gray-200">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="gg" className="flex items-center">
              <img className="w-30 h-20 rounded-md" src={logoImage} alt="/" />
              {/* eslint-disable-next-line max-len */}
              <span className="self-center text-4xl font-semibold whitespace-nowrap text-red-300">
                BABYLAND.LK
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mx-10">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">
                Contact Us
              </h2>
              <ul className="text-gray-200 dark:text-gray-200">
                <li className="mb-4">
                  {" "}
                  No 06, <br />
                  New Shopping Complex, <br />
                  Ja-Ela Rd, <br />
                  Gampaha. <br />
                </li>
                <li>
                  033 22 45 843 <br />
                  075 67 89 089
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ml-1">
            <div>
              <ul className="text-gray-700 dark:text-gray-700">
                <li className="mb-4">
                  <div className="bg-slate-200 py-3 px-4 rounded-lg">
                    Trustworthy Nannies
                  </div>
                </li>
                <li className="mb-4">
                  <div className="bg-slate-200 py-3 px-4 rounded-lg">
                    24 hours Service
                  </div>
                </li>
                <li className="mb-4">
                  <div className="bg-slate-200 py-3 px-4 rounded-lg">
                    Reliable Service
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              BABYLAND.LK™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
