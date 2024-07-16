import React from "react";
import Landing from "./components/Landing";
import "./global/index.css";
import NavBar from "./components/Navbar";
import Tools from "./components/Tools";
import Design from "./components/Design";

function App() {

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Landing scrollToSection={scrollToSection}/>
      <Tools />
      <Design />
    </>
  );
}

export default App;
