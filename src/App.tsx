import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navigationbarcustomer from "./Lib/Navigationbarcustomer";
import HomeCustomer from "./Lib/HomeCustomer";

function App() {
  return (
    // eslint-disable-next-line max-len
    <>
      <Navigationbarcustomer />
      <HomeCustomer />
    </>
  );
}

export default App;
