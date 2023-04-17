import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";

import "./App.css";
import "animate.css";
import "swiper/css";
import "swiper/css/navigation";
// Import animate React components
import "animate.css";
import "animate.css/animate.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-vertical-timeline-component/style.min.css";

/**component**/
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
const App = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1);
  }, []);  

  return (
    <BrowserRouter>
      {loading ? (
        <div className="preloaderr">
          <FadeLoader
            color={"#36d7b7"}
            margin={20}
            height={50}
            width={7}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="NavBar" element={<NavBar />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
