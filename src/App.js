import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Campaigns from "./pages/Campaigns";
import Discover from "./pages/Discover";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import CommunityChat from "./pages/CommunityChat";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/chat" element={<CommunityChat />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
