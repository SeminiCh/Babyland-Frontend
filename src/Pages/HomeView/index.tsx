/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React from "react";
import { useForm } from "react-hook-form";

import HomeImg from "../../Assets/imageHome004.jpg";
import FormImg from "../../Assets/imageMomsForm006.png";

import Footer from "../../Components/Footer";
import InputText from "../../Components/InputText";
import NavigationbarcustomerLogged from "../../Lib/NavigationBarCustomerLogged";

interface SuggestionFormData {
  suggestionComment: String;
}

function HomeView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SuggestionFormData>({ mode: "onChange" });

  const onSubmit = handleSubmit(({ suggestionComment }) => {
    const suggestion = {
      suggestionComment,
    };

    fetch("http://localhost:8080/api/v1/suggestion/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(suggestion),
    }).then(() => {
      console.log("New Suggestion is added!");
    });
  });

  return (
    <>
      <NavigationbarcustomerLogged />
      <div className="w-full">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            src={HomeImg}
            alt="/"
          />
        </div>
        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="px-4 py-12">
            <h3 className="text-4xl font-bold pt-10 pb-5 text-center">
              {" "}
              <br />
              BABYLAND.lk is Helping you in Finding the right Nanny
            </h3>
            <p className="py-4 text-xl text-slate-300 text-center">
              {" "}
              BABYLAND.lk is Providing Service to all parent in Urban and
              suburban areas to finding trustworthy and realiable nannies. Our
              commitment is to provide quality nannies and caregivers to every
              families in the Sri Lanka.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <h3 className="font-bold text-2xl my-6">
                  {" "}
                  Trustworthy Nannies{" "}
                </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  If you find yourself in need of a babysitter, the internet is
                  a great place to start And in truth, it can be a great way to
                  find a someone to care for your child if you know where to
                  look, what questions to ask, and how to vet not just the
                  sitters themselves, but also the sites offering the services.
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  {" "}
                  Find a Nanny{" "}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <h3 className="font-bold text-2xl my-6"> Reliable Service </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  BABYLAND.LK ensures that they only provide well-trained and
                  skilled nannies who are capable of providing the desired level
                  of service. We conduct a thorough screening process for each
                  nannies, including background checks and references, to ensure
                  that they are reliable and trustworthy and reliable agency
                  responds promptly to requests for services and provides their
                  clients with timely and efficient service.
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  {" "}
                  Find a Nanny{" "}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <h3 className="font-bold text-2xl my-6">
                  {" "}
                  10 Years Experience{" "}
                </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  One of the most important factors in hiring a nanny is being
                  clear about your needs and expectations. We help you find
                  attract candidates who are a good fit for your family and
                  avoid misunderstandings down the road with our 10 years
                  Experience.{" "}
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  {" "}
                  Find a Nanny{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-6 bg-white">
        <h2 className="text-3xl font-bold text-black py-8">
          A mother’s love is more beautiful than any fresh flower.
        </h2>
        <form onSubmit={onSubmit}>
          <input
            {...register("suggestionComment", {
              required: true,
            })}
            id="suggestionComment"
            className="w-full h-52 bg-red-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block p-2.5 dark:bg-red-700 dark:border-red-800"
            placeholder="Your Suggections will be submitted annonymousely!"
          />
          <p className="text-red-600 text-xs">
            {errors.suggestionComment && "Invalid!"}
          </p>

          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Submit
            </button>
          </div>
          <img className="w-full h-80" src={FormImg} alt="/" />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default HomeView;
