import React from "react";
import extensions from "../assets/extensions/img/extensions-photo.png";
import figma from "../assets/extensions/svg/Tech Stack Logos/figma/Dark.svg";
import js from "../assets/extensions/svg/Tech Stack Logos/js/Dark.svg";
import tailwind from "../assets/extensions/svg/Tech Stack Logos/tailwind/Dark.svg";
import githubcopilot from "../assets/extensions/svg/Github Copilot.svg";

const Extensions = () => {
  return (
    <div className="h-screen flex flex-col justify-center" id="#tools">
      <div className="flex items-end">
        <h1 className="font-clashgrotesk-semi text-7xl">extensions.</h1>
        <p className="ml-20 mb-2 font-redhat-regular">for vscode users only.</p>
      </div>
      <div>
        <img src={extensions} alt="photo with a laptop" />
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex">
          <div className="mr-5">
            <img src={githubcopilot} alt="github copilot logo" />
          </div>
          <div className="mr-5">
            <img src={figma} alt="figma logo" />
          </div>
          <div className="mr-5">
            <img src={tailwind} alt="tailwind logo" />
          </div>
          <div className="mr-5">
            <img src={js} alt="javascript logo" />
          </div>
        </div>
        <div className="flex font-redhat-bold text-xl text-right">
          <div className="mr-20">
            <p>
              <a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets" target="_blank">
                es7 + react/redux/react-native snippets
              </a>
            </p>
            <p>
              <a href="https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets" target="_blank">
                javascript &#40;es6&#41; code snippets
              </a>
            </p>
            <p>
              <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank">
                tailwind css intellisense
              </a>
            </p>
          </div>
          <div>
            <p>
              <a
                href="https://github.com/features/copilot"
                target="_blank"
              >
                github copilot
              </a>
            </p>
            <p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=Yummygum.city-lights-theme"
                target="_blank"
              >
                city lights theme
              </a>
            </p>
            <p>
              <a href="https://marketplace.visualstudio.com/items?itemName=figma.figma-vscode-extension" target="_blank">
                figma for vscode
              </a>
            </p>
            <p>
              <a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme" target="_blank">
                material icon theme
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extensions;
