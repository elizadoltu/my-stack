import React from "react";
import contactPhoto from "../assets/contact/img/contact-photo.png";
import behance from "../assets/contact/svg/Behance.svg";
import facebook from "../assets/contact/svg/Facebook.svg";
import github from "../assets/contact/svg/Github.svg";
import gmail from "../assets/contact/svg/Gmail.svg";
import instagram from "../assets/contact/svg/Instagram.svg";
import linkedin from "../assets/contact/svg/LinkedIn.svg";
import whatsapp from "../assets/contact/svg/WhatsApp.svg";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex">
        <div className="text-right font-redhat-regular w-96 text-lg mr-5 flex flex-col justify-between">
          <div>
            <p>
              Hope you find these tools inspiring and useful for your projects.
              For any questions, feel free to reach out via my socials or email.
            </p>{" "}
            <p className="mt-5">
              If you come across more great tech and resources, drop me a
              message!
            </p>
          </div>
          <div>
            <p>get in touch</p>
          </div>
        </div>
        <div>
          <img
            src={contactPhoto}
            alt="image with a person typing at a laptop"
          />
        </div>
      </div>
      <div className="flex items-center -mt-16">
        <div className="font-clashgrotesk-bold text-12xl">
          <h1>C</h1>
        </div>
        <div className="w-400px h-36 bg-transparent border-font border-12xl rounded-60xl"></div>
        <div className="font-clashgrotesk-bold text-12xl">
          <h1>NTACT</h1>
        </div>
      </div>
      <div className="flex justify-center ml-80 -mt-20">
        <div className="flex">
          <div className="mr-5">
            <a href="https://www.behance.net/elizadoltu" target="_blank">
              {" "}
              <img src={behance} alt="behance logo" />
            </a>
          </div>
          <div className="mr-5">
            <a href="https://github.com/elizadoltu" target="_blank">
              {" "}
              <img src={github} alt="github logo" />
            </a>
          </div>
          <div className="mr-5">
            <a href="mailto:elizadoltuofficial@gmail.com" target="_blank">
              {" "}
              <img src={gmail} alt="github logo" />
            </a>
          </div>
          <div className="mr-5">
            <a href="tel:+40732134019" target="_blank">
              {" "}
              <img src={whatsapp} alt="github logo" />
            </a>
          </div>
          <div className="mr-5">
            <a href="https://www.facebook.com/dteodora.eliza/" target="_blank">
              {" "}
              <img src={facebook} alt="github logo" />
            </a>
          </div>
          <div className="mr-5">
            <a href="https://www.instagram.com/elizadoltu.design" target="_blank">
              {" "}
              <img src={instagram} alt="github logo" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/eliza-teodora-doltu-56336b24a/" target="_blank">
              {" "}
              <img src={linkedin} alt="github logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
