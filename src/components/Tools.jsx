import toolsPhoto from "../assets/tools/img/tools-image.png";
import notion from "../assets/tools/svg/Notion.svg";
import figma from "../assets/tools/svg/Tech Stack Logos/figma/Dark.svg";
import github from "../assets/tools/svg/Tech Stack Logos/github/Dark.svg";
import mongodb from "../assets/tools/svg/Tech Stack Logos/mongodb/Dark.svg";
import netlify from "../assets/tools/svg/Tech Stack Logos/netlify/Dark.svg";
import postman from "../assets/tools/svg/Tech Stack Logos/postman/Dark.svg";
import vscode from "../assets/tools/svg/Tech Stack Logos/vs/Dark.svg";
import squarespace from "../assets/tools/svg/squarespace-512 1.svg";
import React from "react";

const Tools = () => {
  return (
    <div className="h-screen flex flex-col justify-center" id="#tools">
      <div className="flex items-end">
        <h1 className="font-clashgrotesk-semi text-7xl">tools.</h1>
        <p className="ml-20 mb-2 font-redhat-regular">my go-to toolkit for crafting.</p>
      </div>
      <div>
        <img src={toolsPhoto} alt="photo with a laptop" />
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex">
          <div className="mr-5">
            <img src={figma} alt="figma logo" />
          </div>
          <div className="mr-5">
            <img src={github} alt="github logo" />
          </div>
          <div className="mr-5">
            <img src={vscode} alt="visualstudio code logo" />
          </div>
          <div className="mr-5">
            <img src={postman} alt="postman logo" />
          </div>
          <div className="mr-5">
            <img src={mongodb} alt="mongodb logo" />
          </div>
          <div className="mr-5">
            <img src={netlify} alt="netlify logo" />
          </div>
          <div className="mr-5">
            <img src={notion} alt="notion logo" />
          </div>
          <div>
            <img src={squarespace} alt="squarespace logo" />
          </div>
        </div>
        <div className="flex font-redhat-bold text-xl text-right">
          <div className="mr-20">
            <p>
              <a href="https://figma.com" target="_blank">
                figma
              </a>
            </p>
            <p>
              <a href="https://code.visualstudio.com/" target="_blank">
                vscode
              </a>
            </p>
            <p>
              <a href="https://www.notion.so/" target="_blank">
                notion
              </a>
            </p>
            <p>
              <a href="https://github.com/" target="_blank">
                github
              </a>
            </p>
            <p>
              <a href="https://www.postman.com/" target="_blank">
                postman
              </a>
            </p>
          </div>
          <div>
            <p>
              <a
                href="https://www.mongodb.com/products/tools/compass"
                target="_blank"
              >
                mongodb compass
              </a>
            </p>
            <p>
              <a
                href="https://www.mongodb.com/products/platform/atlas-database"
                target="_blank"
              >
                mongodb atlas
              </a>
            </p>
            <p>
              <a href="https://www.netlify.app/" target="_blank">
                netlify
              </a>
            </p>
            <p>
              <a href="https://www.squarespace.com/" target="_blank">
                squarespace
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
