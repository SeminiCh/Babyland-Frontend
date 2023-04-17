/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NannyCard from "../../Components/NannyCard";
import NannyCardRating from "../../Components/NannyCardRating";
// import { nannyData } from "../../Data/nannyData";
import Footer from "../../Components/Footer";
import image from "../../Assets/imageNanny005.jpg";
import NannyService from "../../api/services/NannyService";
import NavigationbarcustomerLogged from "../../Lib/NavigationBarCustomerLogged";
import ParentService from "../../api/services/ParentService";

// type CustomerInfoState = {
//   usernameCustomer: string;
// };
function YourNannies() {
  const navigate = useNavigate();
  const customerDetails = useLocation();
  // const { usernameCustomer } = customerDetails.state as CustomerInfoState;
  const [parentData, setParentData] = useState<any>([]);

  useEffect(() => {
    async function fetchNannyData() {
      const response = await ParentService.getAllParents();
      if (response) {
        console.log(response?.data);
        const myNannies = response?.data?.filter(
          (bookedNanny: any) =>
            bookedNanny.customer.usernameCustomer ===
            localStorage.getItem("username"),
        );

        setParentData(myNannies);
      }
    }
    fetchNannyData();
  }, []);

  return (
    <>
      <NavigationbarcustomerLogged />
      <div className="w-full pt-24">
        <div className="max-w-[1240px] mx-auto px-2">
          <p className="text-2xl py-4 text-gray-500 text-center">
            {" "}
            <div className=" float-left w-fit flex justify-between items-center pb-1 dark:bg-gray-900">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
            </div>
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
            {parentData
              // .filter((parent: any) =>
              //   parent.customer.usernameCustomer.includes(usernameCustomer),
              // )
              .map((parent: any) => {
                return (
                  <div className="flex">
                    <NannyCardRating
                      key={parent.id}
                      name={parent.nanny.nannyFullName}
                      photo={parent.nanny.nannyImg}
                      image={image}
                      onNavigate={() =>
                        navigate(`/nannyRating`, {
                          state: { nannyNic: parent.nanny.nannyNic },
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

export default YourNannies;
