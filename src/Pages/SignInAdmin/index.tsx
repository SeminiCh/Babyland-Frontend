/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from "react";
import signupImage from "../../Assets/imageSignin003.jpg";
import logoImage from "../../Assets/imageLogo002.png";

function Register() {
  return (
    <div className="m-16 flex flex-row bg-white rounded-lg border-gray-500 shadow-md w-fit">
      <div className="float-left m-1">
        <img className="w-80 h-full rounded-md" src={signupImage} alt="/" />
      </div>
      <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <div className="flex flex-row">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              <img className="w-30 h-20 rounded-md" src={logoImage} alt="/" />
              Log into your Account
            </h5>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-red-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-700 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-2"
              >
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Login to your account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
