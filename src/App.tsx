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
import ViewSuggestionsAdmin from "./Pages/ViewSuggestionsAdmin";
import HomepageCustomer from "./Lib/HomepageCustomer";
import YourNannies from "./Pages/YourNannies";
import DashboardAdmin from "./Pages/DashboardAdmin";
import AddNannyAgent from "./Pages/AddNannyAgent";

import RegistrationModal from "./Pages/RegistrationModal";
import ViewNannyRating from "./Pages/ViewNannyRating";
import NannyNL from "./Pages/NannyNL";
import HomeView from "./Pages/HomeView";
import ContactUs from "./Pages/ContactUs";
import ContactUsView from "./Pages/ContactUsView";
import ReportsAdmin from "./Pages/ReportsAdmin";
import ParentTableAgent from "./Pages/ParentTableAgent";
import AgentRegistration from "./Pages/AgentRegistration";
import SuccessMsg from "./Components/SucessMsg";
import SpecialRequest from "./Pages/SpecialRequest";
import SuccessMessageSpecialRequirement from "./Pages/SucessMessageSpecialRequirement";
import SuccessMsgCustomerRegistration from "./Pages/SucessMessageCustomerRegistration";
import SignInAdmin from "./Pages/SignInAdmin";
import DetailedNannyAgent from "./Pages/DetailedViewAgent";
import SuccessMsgAddNannyAgent from "./Pages/SucessMessageAddNannyAgent";
import SuccessMsgAdminRegistration from "./Pages/SucessMsgAdminRegistration";
import ViewSpecialRequest from "./Pages/ViewSpecialRequest";

// import NannyCardRating from "./Components/NannyCardRating";

function App() {
  return (
    // eslint-disable-next-line max-len
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeview" element={<HomeView />} />
        <Route path="/home" element={<HomepageCustomer />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/nannies" element={<Nanny />} />
        <Route path="/nanniesView" element={<NannyNL />} />
        <Route path="mynannies" element={<YourNannies />} />
        <Route path="/detailedNanny" element={<DetailedNanny />} />
        <Route path="/SidebarAdmin" element={<SidebarAdmin />} />
        <Route path="/AddNanny" element={<AddNanny />} />
        <Route path="/addNannyAgent" element={<AddNannyAgent />} />
        <Route path="/signInAgent" element={<SignInAgent />} />
        <Route path="/agent" element={<AddAgentForm />} />
        <Route path="/parentInformation" element={<ParentInfo />} />
        <Route path="/registerCustomer" element={<RegisterCustomer />} />
        <Route path="/agentRegistration" element={<AgentRegistration />} />
        <Route path="/registationSucceed" element={<RegistrationModal />} />
        <Route path="/nannyTableAgent" element={<NannyTableAgent />} />
        <Route path="/nannyTableAdmin" element={<NannyTableAdmin />} />
        <Route path="/detailedNannyAdmin" element={<DetailedNannyAdmin />} />
        <Route path="/detailedNannyAgent" element={<DetailedNannyAgent />} />
        <Route path="/parenttableAdmin" element={<ParentTableAdmin />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/nannyRating" element={<NannyRating />} />
        <Route path="/viewSuggestion" element={<ViewSuggestionsAdmin />} />
        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/viewNannyRating" element={<ViewNannyRating />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/contactusview" element={<ContactUsView />} />
        <Route path="/reportAdmin" element={<ReportsAdmin />} />
        <Route path="/viewnannyrating" element={<ViewNannyRating />} />
        <Route path="/parentTableAgent" element={<ParentTableAgent />} />
        <Route path="/sucessBooking" element={<SuccessMsg />} />
        <Route path="/specialreq" element={<SpecialRequest />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route
          path="/sucessMessageSpecialRequest"
          element={<SuccessMessageSpecialRequirement />}
        />
        <Route
          path="/sucessMsgCustomerRegistration"
          element={<SuccessMsgCustomerRegistration />}
        />
        <Route path="/signinAdmin" element={<SignInAdmin />} />
        <Route
          path="/sucessMsgAddNannyAgent"
          element={<SuccessMsgAddNannyAgent />}
        />

        <Route
          path="/suceeMsgAgentRegister"
          element={<SuccessMsgAdminRegistration />}
        />
        <Route path="/viewspecialrequest" element={<ViewSpecialRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
