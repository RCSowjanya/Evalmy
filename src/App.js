import Home from "./Components/Home";
import About from "./Components/About";
import Signin from "./Components/Signin";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Sales from "./Components/Sales";
import Insight from "./Components/Insight";
import Appanalysis from "./Components/Appanalysis";
import { Routes, Route } from "react-router-dom";
import Sociallisten from "./Components/Sociallisten";
import Socialmonitor from "./Components/Socialmonitor";
import Compaign from "./Components/Compaign";
import Casemanagement from "./Components/Casemanagement";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/appanalysis" element={<Appanalysis />} />
        <Route path="/sociallisten" element={<Sociallisten />} />
        <Route path="/socialmonitor" element={<Socialmonitor />} />
        <Route path="/compaign" element={<Compaign />} />
        <Route path="/casemanagement" element={<Casemanagement />} />
      </Routes>
    </div>
  );
}

export default App;
