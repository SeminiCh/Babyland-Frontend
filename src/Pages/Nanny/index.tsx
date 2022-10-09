import React from "react";
import NannyCard from "../../Components/NannyCard";
import Navigationbarcustomer from "../../Lib/Navigationbarcustomer";
import { nannyData } from "../../Data/nannyData";
import Footer from "../../Components/Footer";

function Nanny() {
  return (
    <>
      <Navigationbarcustomer />
      <div className="w-full pt-24">
        <div className="max-w-[1240px] mx-auto px-2">
          <p className="text-2xl py-8 text-gray-500 text-center">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {nannyData.map(({ id, name, experience, age, image, rating }) => (
              <div key={id} className="flex">
                <NannyCard
                  name={name}
                  experience={experience}
                  age={age}
                  image={image}
                  rating={rating}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Nanny;
