import React from "react";
import NannyCard from "../../Components/NannyCard";
import Navigationbarcustomer from "../../Lib/Navigationbarcustomer";

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
            <div className="flex">
              <div>
                <NannyCard />
              </div>
            </div>
            <div className="flex">
              <div>
                <NannyCard />
              </div>
            </div>
            <div className="flex">
              <div>
                <NannyCard />
              </div>
            </div>
            <div className="flex">
              <div>
                <NannyCard />
              </div>
            </div>
            <div className="flex">
              <div>
                <NannyCard />
              </div>
            </div>
            <div className="flex">
              <div>
                <NannyCard />
              </div>
            </div>
            <div className="flex">
              <div>
                <NannyCard />
              </div>
            </div>
            <div className="flex">
              <div>
                <NannyCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nanny;
