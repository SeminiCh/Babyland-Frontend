import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nanny from "./Pages/Nanny";
import Home from "./Pages/Home";
import SignIn from "./Pages/Signin";
import SidebarAdmin from "./Pages/SidebarAdmin";
import AddNanny from "./Pages/AddNannyForm";
import SignInAgent from "./Pages/SignInAgent";
import ParentInfo from "./Pages/ParentInformation";
import RegisterCustomer from "./Pages/RegisterCustomer";
import NannyTableAgent from "./Pages/NannyTableAgent";
import AddAgentForm from "./Pages/AddAgentForm";
import DetailedNanny from "./Pages/DetailedNannyView";
import NannyTableAdmin from "./Pages/NannyTableAdmin";
import DetailedNannyAdmin from "./Pages/DetailedNannyAdmin";
import ParentTableAdmin from "./Pages/ParentTableAdmin";
import AdminDashboard from "./Pages/AdminDashboard";
import NannyRating from "./Pages/NannyRating";

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
        <Route path="/addAgent" element={<AddAgentForm />} />
        <Route path="/parentInformation" element={<ParentInfo />} />
        <Route path="/registerCustomer" element={<RegisterCustomer />} />
        <Route path="/nannyTable" element={<NannyTableAgent />} />
        <Route path="/nannyTableAdmin" element={<NannyTableAdmin />} />
        <Route path="/detailedNannyAdmin" element={<DetailedNannyAdmin />} />
        <Route path="/parenttableAdmin" element={<ParentTableAdmin />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/nannyRating" element={<NannyRating />} />
      </Routes>
    </Router>
  );
}

export default App;
