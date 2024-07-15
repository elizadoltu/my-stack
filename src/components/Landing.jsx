import React from "react";
import landingPhoto from "../assets/start/img/start-image.png";
import NavBar from "./Navbar";

const Landing = ({ scrollToSection }) => {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex">
        <div>
          <img
            src={landingPhoto}
            alt=" a photo with a keyboard and a notebook"
          />
        </div>
        <div className="ml-5 w-72 font-redhat-regular text-xl flex flex-col justify-between">
          <div>
            <p>
              hi! my name is eliza - teodora doltu and i am a fullstack
              developer
            </p>
            <p className="mt-5">
              discover the essential tools i use daily to craft beautiful
              websites!
            </p>
          </div>
          <div className="flex justify-between opacity-40 text-sm">
            <p>get inspired</p>
            <p>get started</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end -mt-11">
        <h1 className="font-clashgrotesk-bold text-10xl">MY</h1>
        <NavBar scrollToSection={scrollToSection}/>
        <h1 className="font-clashgrotesk-bold text-10xl">STACK</h1>
      </div>
    </div>
  );
};

export default Landing;
