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
            <h3 className="text-4xl font-bold py-6 text-center">
              {" "}
              <br />
              BABYLAND.lk is Finding the you the right Nanny
            </h3>
            <p className="py-4 text-xl text-slate-300">
              {" "}
              BABYLAND.lk is providing service to parent in urban and suburban
              areas to finding trustworthy and realiable nannies.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <h3 className="font-bold text-2xl my-6"> Sales </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  {" "}
                  Contact Us{" "}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <h3 className="font-bold text-2xl my-6"> Media Inquiries </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  {" "}
                  Contact Us{" "}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <h3 className="font-bold text-2xl my-6"> Technical Support </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.{" "}
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  {" "}
                  Contact Us{" "}
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
