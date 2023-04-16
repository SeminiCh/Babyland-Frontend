/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React from "react";

import HomeImg from "../../Assets/imageHome004.jpg";
import NavigationbarcustomerLogged from "../../Lib/NavigationBarCustomerLogged";
import AreaChart from "../../Components/AreaChart";
import SidebarAdmin from "../SidebarAdmin";

function ContactUsView() {
  return (
    <>
      <SidebarAdmin />
      <div className="w-full p-40 pl-96">
        <AreaChart />
      </div>
    </>
  );
}

export default ContactUsView;
