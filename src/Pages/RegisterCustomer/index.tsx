/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from "react";
import Footer from "../../Components/Footer";
import Navigationbarcustomer from "../../Lib/Navigationbarcustomer";
import RegisterImage from "../../Assets/imageRegister006.jpg";
import logoImage from "../../Assets/imageLogo002.png";

function RegisterCustomer() {
  return (
    <>
      <Navigationbarcustomer />
      <main className="flex items-center justify-center h-screen pt-28">
        <div className="bg-white rounded-lg border-gray-500 shadow-md flex justify-center items-center">
          <div className="flex-1 p-4 max-w-sm bg-red-100 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
              <h5 className="text-xl flex items-center font-medium text-gray-900 dark:text-white">
                <img className="w-30 h-20 rounded-md" src={logoImage} alt="/" />
                <p>Create an Account</p>
              </h5>
              <div>
                <label
                  htmlFor="usernameCustomer"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="usernameCustomer"
                  id="usernameCustomer"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Raini00"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="emailCustomer"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="emailCustomer"
                  id="emailCustomer"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="passwordCustomer"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="passwordCustomer"
                  id="passwordCustomer"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Create account
              </button>

              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                <label
                  htmlFor="navigateAgent"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-2"
                >
                  Do you want to insert nanny details?
                </label>
                <a
                  href="SignInAgent"
                  className="ml-auto text-sm text-red-700 hover:underline dark:text-red-700"
                >
                  Click Here!
                </a>
              </div>
            </form>
          </div>
          <div className="h-full flex-1 w-80 bg-red-500">
            <img
              className="h-full rounded-md object-cover"
              src={RegisterImage}
              alt="/"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default RegisterCustomer;