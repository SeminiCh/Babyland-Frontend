/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NannyCard from "../../Components/NannyCard";
import Navigationbarcustomer from "../../Lib/Navigationbarcustomer";
// import { nannyData } from "../../Data/nannyData";
import Footer from "../../Components/Footer";
import image from "../../Assets/imageNanny005.jpg";
import NannyService from "../../api/services/NannyService";

function Nanny() {
  const navigate = useNavigate();
  const [nannyData, setNannyData] = useState<any>([]);

  useEffect(() => {
    async function fetchNannyData() {
      const response = await NannyService.getAllNannies();
      if (response) {
        setNannyData(response?.data);
      }
    }
    fetchNannyData();
  });

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
                <div className="flex">
                  <NannyCard
                    key={nanny.id}
                    name={nanny.nannyFullName}
                    agent={nanny.agent.agentCompanyName}
                    experience={nanny.nannyQualification}
                    age={nanny.nannyAge}
                    firstdistrict={nanny.nannyPrefferedDistrict1}
                    secondDistrict={nanny.nannyPrefferedDistrict2}
                    image={image}
                    onNavigate={() =>
                      navigate(`/detailedNanny`, {
                        state: { nannyNic: nanny.nannyNic },
                      })
                    }
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
