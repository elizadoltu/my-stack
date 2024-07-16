import React from "react";
import awwwards from '../assets/inspiration/svg/awwwards.svg';
import behance from '../assets/inspiration/svg/behance.svg';
import pinterest from '../assets/inspiration/svg/pinterest.svg';
import inspirationPhoto from '../assets/inspiration/img/inspiration-photo.png';

const Inspiration = () => {
    return (
        <div className="h-screen flex flex-col justify-center" id="#tools">
      <div className="flex items-end">
        <h1 className="font-clashgrotesk-semi text-7xl">inspiration.</h1>
        <p className="ml-20 mb-2 font-redhat-regular">where i find my daily dose of inspiration.</p>
      </div>
      <div>
        <img src={inspirationPhoto} alt="photo with a laptop" />
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex">
          <div className="mr-5">
            <img src={behance} alt="behance logo" />
          </div>
          <div className="mr-5">
            <img src={pinterest} alt="pinterest logo" />
          </div>
          <div className="mr-5">
            <img src={awwwards} alt="awwwards logo" />
          </div>
        </div>
        <div className="flex font-redhat-bold text-xl text-right">
          <div>
            <p>
              <a href="https://www.pinterest.com/" target="_blank">
                pinterest
              </a>
            </p>
            <p>
              <a href="https://www.behance.net/" target="_blank">
                behance
              </a>
            </p>
            <p>
              <a href="https://www.awwwards.com/" target="_blank">
                awwwards
              </a>
            </p>
            <p>
              <a href="https://www.footer.design/" target="_blank">
                footer
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Inspiration;