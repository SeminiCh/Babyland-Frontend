import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nanny from "./Pages/Nanny";
import Home from "./Pages/Home";
import SignIn from "./Pages/Signin";
import DetailedNanny from "./Pages/DetailedNannyView";
import SidebarAdmin from "./Pages/SidebarAdmin";
import AddNanny from "./Pages/AddNannyForm";
import SignInAdmin from "./Pages/SignInAdmin";

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
        <Route path="/signInAdmin" element={<SignInAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
