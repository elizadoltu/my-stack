import React from "react";
import fontshare from "../assets/design/svg/fontshare.svg";
import unsplash from "../assets/design/svg/unsplash.svg";
import pexels from "../assets/design/svg/pexels_logo_0 1.svg";
import copypastesvg from "../assets/design/svg/Frame.svg";
import googlefonts from "../assets/design/svg/google-fonts-2021-2 1.svg";
import fontspace from "../assets/design/svg/fontspace.svg";
import designImage from "../assets/design/img/design-image.png";

const Design = () => {
  return (
    <div className="h-screen flex flex-col justify-center" id="#design">
      <div className="flex items-end">
        <h1 className="font-clashgrotesk-semi text-7xl">design.</h1>
        <p className="ml-20 mb-2 font-redhat-regular">the essential tools i use for design work.</p>
      </div>
      <div>
        <img src={designImage} alt="image with a laptop with a low fidelity" />
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex font-redhat-bold text-xl text-left">
          <div className="mr-20">
            <p>
              <a href="https://www.pexels.com/" target="_blank">
                pexels
              </a>
            </p>
            <p>
              <a href="https://unsplash.com/" target="_blank">
                unsplash
              </a>
            </p>
            <p>
              <a href="https://www.fontshare.com/" target="_blank">
                fontshare
              </a>
            </p>
            <p>
              <a href="https://fonts.google.com/" target="_blank">
                google fonts
              </a>
            </p>
          </div>
          <div>
            <p>
              <a
                href="https://www.fontspace.com/"
                target="_blank"
              >
                fontspace
              </a>
            </p>
            <p>
              <a
                href="https://fonts.google.com/icons"
                target="_blank"
              >
                material symbols & icons
              </a>
            </p>
            <p>
              <a href="https://shapes.framer.website/" target="_blank">
                copy-paste SVG shapes
              </a>
            </p>
            <p>
              <a href="https://payhip.com/Winterkurt" target="_blank">
                payhip.com/Winterkurt
              </a>
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5">
            <img src={fontshare} alt="fontshare logo" />
          </div>
          <div className="mr-5">
            <img src={unsplash} alt="unsplash logo" />
          </div>
          <div className="mr-5">
            <img src={pexels} alt="pexels logo" />
          </div>
          <div className="mr-5">
            <img src={copypastesvg} alt="copy-paste svg logo" />
          </div>
          <div className="mr-5">
            <img src={googlefonts} alt="google fonts logo" />
          </div>
          <div>
            <img src={fontspace} alt="fontspace" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
