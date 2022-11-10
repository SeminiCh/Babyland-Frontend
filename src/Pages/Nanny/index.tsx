import React, { useEffect, useState } from "react";
import NannyCard from "../../Components/NannyCard";
import Navigationbarcustomer from "../../Lib/Navigationbarcustomer";
// import { nannyData } from "../../Data/nannyData";
import Footer from "../../Components/Footer";
import image from "../../Assets/imageNanny005.jpg";

function Nanny() {
  const [nannyData, setNannyData] = useState<any>([]);
  useEffect(() => {
    const dataNanny = async () => {
      const responseNanny = await fetch("http://localhost:8080/api/v1/nanny", {
        method: "POST",
        mode: "no-cors",
      })
        .then((response) => response.json())
        .then((data) => setNannyData(data));
    };
  }, []);
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
            {nannyData.map((nanny: any) => {
              return (
                <div key={nanny.id} className="flex">
                  <NannyCard
                    name={nanny.nannyFullName}
                    experience={nanny.nannyQualification}
                    age={nanny.nannyAge}
                    image={image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Nanny;
