import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import EmailPeerContainer from "./components/messages/EmailPeer";
import HiringManagerContainer from "./components/messages/HiringManager";
import LinkedInContainer from "./components/messages/LinkedInPeer";
import LittleInfoContainer from "./components/messages/LittleInfo";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div>
      <Navbar />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hiring-manager" element={<HiringManagerContainer />} />
        <Route path="/little-info-message" element={<LittleInfoContainer />} />
        <Route path="/email-to-peer" element={<EmailPeerContainer />} />
        <Route path="/linkedIn-to-peer" element={<LinkedInContainer />} />
      </Routes>
    </div>
  );
}

export default App;
