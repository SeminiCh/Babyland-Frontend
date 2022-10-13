import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nanny from "./Pages/Nanny";
import Home from "./Pages/Home";
import SignIn from "./Pages/Signin";
import DetailedNanny from "./Pages/DetailedNannyView";
import SidebarAdmin from "./Pages/SidebarAdmin";
import AddNanny from "./Pages/AddNannyForm";
import SignInAgent from "./Pages/SignInAgent";
import ParentInfo from "./Pages/ParentInformation";
import RegisterCustomer from "./Pages/RegisterCustomer";
import NannyTableAgent from "./Pages/NannyTableAgent";

function App() {
  return (
    // eslint-disable-next-line max-len
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/nannies" element={<Nanny />} />
        <Route path="/detailedNanny" element={<DetailedNanny />} />
        <Route path="/SidebarAdmin" element={<SidebarAdmin />} />
        <Route path="/AddNanny" element={<AddNanny />} />
        <Route path="/signInAgent" element={<SignInAgent />} />

        <Route path="/parentInformation" element={<ParentInfo />} />
        <Route path="/registerCustomer" element={<RegisterCustomer />} />
        <Route path="/nannyTable" element={<NannyTableAgent />} />
      </Routes>
    </Router>
  );
}

export default App;
