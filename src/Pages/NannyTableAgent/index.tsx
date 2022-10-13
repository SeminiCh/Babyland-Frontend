import React from "react";
import NavigationbarAgent from "../../Lib/NavigationBarAgent";
import NannyTable from "../../Lib/NannyTable";
import Footer from "../../Components/Footer";

function nannyTableAgent() {
  return (
    <>
      <NavigationbarAgent />
      <NannyTable />
      <Footer />
    </>
  );
}

export default nannyTableAgent;
