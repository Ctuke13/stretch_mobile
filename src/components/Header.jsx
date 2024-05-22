// import React from "react";
// import { Link } from "react-router-dom";
import sm_icon from "../assets/images/sm_icon.png";
import sm_text_logo from "../assets/images/sm_text_logo.png";

function Header() {
  let Links = [
    { name: "OUR METHOD", link: "/ourmethod" },
    { name: "LOCATION", link: "/location" },
    { name: "GIFT CARDS", link: "/press" },
    // { name: "BOOK YOUR FREE STRETCH CONSULTATION", link: "/consultation" },
    // { name: "CLIENT LOGIN", link: "https://www.clubready.com/signin.asp" },
  ];
  return (
    <div className="bg-black shadow-md w-full">
      <div className="md:px-10 py-4 px-7">
        <div className="flex items-center justify-between px-4 py-2">
          {/* logo */}

          <div className="flex text-2xl cursor-pointer items-center gap-2">
            <img src={sm_icon} className="h-24 w-auto" />
            <img src={sm_text_logo} className="h-24 w-auto" />
            <span className="font-bold">STRETCH MOBILE</span>
          </div>
          {/* nav links here*/}
          <ul className="flex gap-4 ml-auto justify-center content-center">
            {Links.map((link, i) => (
              <li key={i} className="justify-center content-center">
                <a
                  href={link.link}
                  className=" text-lg text-yellow-300 font-bold  m-2 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <a
              href="/consultation"
              className="bg-yellow-300  hover:bg-yellow-500 text-black py-2 px-4 rounded-md justify-center content-center m-2"
            >
              <div className="font-bold text-lg justify-center content-center">
                BOOK YOUR FREE CONSULTATION
              </div>
            </a>
            <a
              href="https://www.clubready.com/signin.asp"
              className=" text-lg text-yellow-300 m-2 transition-colors hover:text-white font-bold"
            >
              CLIENT LOGIN
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
