import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Campaigns from "./pages/Campaigns"; // ✅ Added Campaigns Page
import Discover from "./pages/Discover";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import CommunityChat from "./pages/CommunityChat";
import Profile from "./pages/Profile";
import CreateCampaign from "./pages/CreateCampaign"; // ✅ Import CreateCampaign
import Payment from "./pages/Payment";
import "bootstrap/dist/css/bootstrap.min.css";


// Create Authentication Context
export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Auto-login if token exists in localStorage
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.get("http://localhost:5000/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
      } catch (error) {
        console.error("Auto-login failed", error);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // 🔹 Function to handle login
  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);
  };

  // 🔹 Function to handle logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Router>
        <div className="app-wrapper">
          <Navigation />
          <div className="content">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/campaigns" element={<Campaigns />} />
                  <Route path="/discover" element={<Discover />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/chat" element={<CommunityChat />} />
                  <Route path="/profile" element={user ? <Profile /> : <Navigate to="/signin" />} />
                  <Route path="/create-campaign" element={user ? <CreateCampaign /> : <Navigate to="/signin" />} />
                  <Route path="/payment" element={<Payment />} />
                </Routes>
              </>
            )}
          </div>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
