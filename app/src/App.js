import React from "react";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <div className="container-1" style={{ minWidth: "300px" }}>
        <Navbar />
        <Section1 />
        <ExperienceSection />
        <EducationSection />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
}

export default App;
