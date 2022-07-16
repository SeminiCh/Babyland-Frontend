import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomeCustomer from "./Lib/HomeCustomer";
import NannyCard from "./Components/NannyCard";
import InputText from "./Components/InputText";
import SidebarAdmin from "./Lib/SidebarAdmin";

function App() {
  return (
    // eslint-disable-next-line max-len
    <>
      <HomeCustomer />
      <br />
      <br />
      <NannyCard />
      <InputText />
      <br />
      <SidebarAdmin />
    </>
  );
}

export default App;
