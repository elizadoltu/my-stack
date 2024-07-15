import React from "react";

function NavBar({ scrollToSection }) {
  return (
    <div className="flex justify-between mb-16 font-redhat-regular text-xl cursor-pointer">
      <p className="mr-20" onClick={() => scrollToSection('tools')}>tools</p>
      <p className="mr-20" onClick={() => scrollToSection('design')}>design</p>
      <p className="mr-20" onClick={() => scrollToSection('inspiration')}>inspiration</p>
      <p onClick={() => scrollToSection('technologies')}>technologies</p>
    </div>
  );
}

export default NavBar;
