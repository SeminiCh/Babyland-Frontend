import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nanny from "./Pages/Nanny";
import Home from "./Pages/Home";
import SignIn from "./Pages/Signin";

function App() {
  return (
    // eslint-disable-next-line max-len
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/nannies" element={<Nanny />} />
      </Routes>
    </Router>
  );
}

export default App;
