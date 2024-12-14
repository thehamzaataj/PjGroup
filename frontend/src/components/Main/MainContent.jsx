import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../App.css";
import logo from "../../Assests/logo.png";
import bgImage from "../../Assests/brand-color-with-out-pattern.png";

const MainContent = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSplash ? (
        <div
          className="flex items-center justify-center h-screen bg-black"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src={logo} alt="Logo" className="w-80.1 animate-fade-in-out" />
        </div>
      ) : (
        <div
          className="h-screen flex flex-col items-center justify-center bg-gray-100"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex gap-4">
            {/* Real Estate Link */}
            <Link
              to="/RealEstate"
              className="px-20 py-3 bg-[#AD7911] text-white font-20px rounded-md shadow-lg hover:bg-[#003C52] transition duration-300"
            >
              Real Estate
              <br /> & Consultancy
            </Link>

            {/* Building Development Link */}
            <Link
              to="/BuildingDevelopment"
              className="px-20 py-3 bg-[#AD7911] text-white font-20px rounded-md shadow-lg hover:bg-[#003C52] transition duration-300"
            >
              Building, Development
              <br /> & Construction
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
