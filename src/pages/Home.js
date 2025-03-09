import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/crowdbg1.jpg')", // Uncomment this if you have a background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#E3F2FD", // Light blue background
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#00008B", // Dark gray for readability
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ 
        fontSize: "3rem", 
        fontWeight: "bold", 
        marginBottom: "10px",
        color: "#00008B", // Blue heading
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" // Soft shadow effect
      }}>
        Welcome to Our Crowdfunding Platform
      </h1>
      
      <p style={{ 
        fontSize: "1.5rem", 
        maxWidth: "600px", 
        color: "#555",
        lineHeight: "1.5",
      }}>
        Support and create campaigns for a better future.
      </p>

      <button 
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          fontSize: "1.2rem",
          color: "#fff",
          backgroundColor: "#28A745", // Green button
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "0.3s",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#218838"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#28A745"}
      >
        Explore Campaigns
      </button>
    </div>
  );
};

export default Home;
