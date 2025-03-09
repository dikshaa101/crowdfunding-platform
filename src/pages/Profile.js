import React, { useContext } from "react";
import { AuthContext } from "../App";

function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div
      style={{
        backgroundImage: "url('/helping1.jpg')", // Replace with an elegant background
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
        position: "relative",
      }}
    >
      {/* Floating Profile Image - Positioned Higher */}
      <img
        src="/DR.jpg" // Replace with the actual profile image
        alt="Profile"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid white",
          boxShadow: "0px 5px 15px rgba(255,255,255,0.5)",
          marginBottom: "10px",
          marginTop: "-50px", // Moves the image up
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      />

      {/* Profile Details */}
      <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#F5F5F5" }}>
        Welcome, {user?.name}!
      </h2>
      <p style={{ fontSize: "16px", fontWeight: "lighter", color: "#F5F5F5" }}>
        Email: {user?.email}
      </p>

      {/* Elegant Logout Button */}
      <button
        onClick={logout}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          cursor: "pointer",
          backgroundColor: "rgba(255, 69, 58, 0.8)",
          color: "#fff",
          border: "none",
          borderRadius: "25px",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "0.3s ease-in-out",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "rgba(255, 0, 0, 0.9)")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "rgba(255, 69, 58, 0.8)")}
      >
        Logout
      </button>

      {/* Light Overlay for Aesthetic Feel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.4)", // Adds a subtle overlay
          zIndex: "-1",
        }}
      ></div>
    </div>
  );
}

export default Profile;
