/* eslint-disable max-len */
import React from "react";

import HomeImg from "../../Assets/imageHome004.jpg";
import FormImg from "../../Assets/imageMomsForm006.png";
import Button from "../../Components/Button/Index";
import Footer from "../../Components/Footer";
import InputText from "../../Components/InputText";
import Navigationbarcustomer from "../Navigationbarcustomer";

function Home() {
  function navigateLogin() {}
  return (
    <>
      <Navigationbarcustomer />
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
                <h3 className="font-bold text-2xl my-6"> 24 Hours Service </h3>
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
                  If you find yourself in need of a babysitter, the internet is
                  a great place to start And in truth, it can be a great way to
                  find a someone to care for your child if you know where to
                  look, what questions to ask, and how to vet not just the
                  sitters themselves, but also the sites offering the services.{" "}
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
        <form>
          <InputText
            lbltitle="We would like to know your thoughts!"
            idTitle="feedbackCommon"
            placeholderWord="Your Suggections will be submitted annonymousely!"
          />
          <div className="w-full flex justify-end">
            <Button
              title="Submit"
              extraTailwindClasses="mt-4"
              onClickHandler={() => navigateLogin}
            />
          </div>
          <img className="w-full h-80" src={FormImg} alt="/" />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Home;
