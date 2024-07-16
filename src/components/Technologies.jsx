import React from "react";
import techPhoto from "../assets/technologies/img/tech-image.png";
import babel from "../assets/technologies/svg/Tech Stack Logos/babel/Dark.png";
import chrome from "../assets/technologies/svg/Tech Stack Logos/chrome/Dark.png";
import css from "../assets/technologies/svg/Tech Stack Logos/css/Dark.png";
import eslint from "../assets/technologies/svg/Tech Stack Logos/eslint/Dark.png";
import html5 from "../assets/technologies/svg/Tech Stack Logos/html5/Dark.png";
import javascript from "../assets/technologies/svg/Tech Stack Logos/js/Dark.png";
import mongodb from "../assets/technologies/svg/Tech Stack Logos/mongodb/Dark.png";
import nodejs from "../assets/technologies/svg/Tech Stack Logos/nodejs/Dark.png";
import npm from "../assets/technologies/svg/Tech Stack Logos/npm/Dark.png";
import prettier from "../assets/technologies/svg/Tech Stack Logos/prettier/Dark.png";
import reactjs from "../assets/technologies/svg/Tech Stack Logos/reactjs/Dark.png";
import tailwind from "../assets/technologies/svg/Tech Stack Logos/tailwind/Dark.png";
import vitejs from "../assets/technologies/svg/Tech Stack Logos/vitejs/Dark.png";
import gsap from "../assets/technologies/svg/gsap.png";
import jest from "../assets/technologies/svg/Jest.png";

const Technologies = () => {
  return (
    <div className="h-screen flex flex-col justify-center" id="#technologies">
      <div className="flex items-end">
        <h1 className="font-clashgrotesk-semi text-7xl">technologies.</h1>
        <p className="ml-20 mb-2 font-redhat-regular">
          here are the technologies powering my projects.
        </p>
      </div>
      <div>
        <img src={techPhoto} alt="photo with a laptop" />
      </div>
      <div className="flex">
        <div className="flex mt-5 justify-between">
          <div className="flex flex-col font-redhat-regular text-lg">
            <h1 className="mb-5 font-redhat-bold text-3xl">frontend.</h1>
            <p><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target="_blank">
                html5
              </a></p>
            <p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                css3
              </a></p>
            <p><a href="https://tailwindcss.com/" target="_blank">
                tailwind css
              </a></p>
            <p><a href="https://react.dev/" target="_blank">
                reactjs
              </a></p>
            <p><a href="https://www.javascript.com/" target="_blank">
                javascript
              </a></p>
            <p><a href="https://gsap.com/" target="_blank">
                gsap
              </a></p>
          </div>
          <div className="flex flex-col ml-16 font-redhat-regular text-lg">
            <h1 className="mb-5 font-redhat-bold text-3xl">backend.</h1>
            <p><a href="https://nodejs.org/en" target="_blank">
                node.js
              </a></p>
            <p><a href="https://expressjs.com/" target="_blank">
                express
              </a></p>
            <p><a href="https://www.mongodb.com/" target="_blank">
                mongodb
              </a></p>
          </div>
          <div>
            <div className="flex flex-col ml-16 font-redhat-regular text-lg">
              <h1 className="mb-5 font-redhat-bold text-3xl">build tools.</h1>
              <p><a href="https://vitejs.dev/" target="_blank">
                vite
              </a></p>
              <p><a href="https://babeljs.io/" target="_blank">
                babel
              </a></p>
            </div>
            <div className="flex flex-col ml-16 font-redhat-regular text-lg mt-10">
              <h1 className="mb-5 font-redhat-bold text-3xl">testing.</h1>
              <p><a href="https://jestjs.io/" target="_blank">
                jest
              </a></p>
            </div>
          </div>
          <div className="ml-80">
            <div className="grid grid-cols-6 grid-rows-3">
              <div className="mr-5">
                <img src={nodejs} alt="node logo" />
              </div>
              <div className="mr-5">
                <img src={prettier} alt="prettier logo" />
              </div>
              <div className="mr-5">
                <img src={eslint} alt="eslint logo" />
              </div>
              <div className="mr-5">
                <img src={npm} alt="npm logo" />
              </div>
              <div className="mr-5">
                <img src={html5} alt="html logo" />
              </div>
              <div className="mr-5">
                <img src={css} alt="css logo" />
              </div>
              <div className="mr-5">
                <img src={tailwind} alt="tailwindcss logo" />
              </div>
              <div>
                <img src={mongodb} alt="mongodb logo" />
              </div>
              <div className="mr-5">
                <img src={vitejs} alt="vite logo" />
              </div>
              <div className="mr-5">
                <img src={reactjs} alt="reactjs logo" />
              </div>
              <div className="mr-5">
                <img src={javascript} alt="javascript logo" />
              </div>
              <div className="mr-5">
                <img src={chrome} alt="chrome logo" />
              </div>
              <div className="mr-5">
                <img src={gsap} alt="gsap logo" />
              </div>
              <div className="mr-5">
                <img src={jest} alt="jest logo" />
              </div>
              <div className="mr-5">
                <img src={babel} alt="babel logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-5">
        <div className="flex mt-5">
          <div className="flex flex-col font-redhat-regular text-lg">
            <h1 className="mb-5 font-redhat-bold text-3xl">
              development and debugging.
            </h1>
            <p><a href="https://developer.chrome.com/docs/devtools" target="_blank">
                chrome developer tools
              </a></p>
            <p><a href="https://www.npmjs.com/" target="_blank">
                npm &#40;node package manager&#41;
              </a></p>
            <p><a href="https://eslint.org/" target="_blank">
                eslint
              </a></p>
          </div>
          <div className="flex flex-col ml-16 font-redhat-regular text-lg">
            <h1 className="mb-5 font-redhat-bold text-3xl">
              utilities and tools.
            </h1>
            <p>dotenv &#40;environment variables&#41;</p>
            <p>prettier &#40;code formatter&#41;</p>
            <p>babel-plugin-transform-import-meta</p>
            <p>hacksplaining</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
