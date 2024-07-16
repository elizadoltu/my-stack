import React from "react";
import Landing from "./components/Landing";
import "./global/index.css";
import NavBar from "./components/Navbar";
import Tools from "./components/Tools";
import Design from "./components/Design";
import Inspiration from "./components/Inspiration";
import Technologies from "./components/Technologies";
import Extensions from "./components/Extensions";

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
      <Inspiration />
      <Technologies />
      <Extensions />
    </>
  );
}

export default App;
