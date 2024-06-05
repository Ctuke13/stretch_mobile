import { useState } from "react";
import { Link } from "react-router-dom";
import sm_icon from "../assets/images/sm_icon.png";
import sm_text_logo from "../assets/images/sm_text_logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    { name: "HOME", link: "/" },
    { name: "OUR PHILOSOPHY", link: "/about" },
    { name: "WHY STRETCH?", link: "/why" },
    { name: "LOCATION", link: "/location" },
  ];

  return (
    <div className="bg-black shadow-md w-full">
      <div className="md:px-10 py-4 px-7">
        <div className="flex items-center justify-between px-4 py-2">
          <Link
            to="/"
            className="flex flex-col md:flex-row items-center text-2xl cursor-pointer gap-2"
          >
            <img
              src={sm_icon}
              className="h-24 w-auto min-w-[3rem]" // Fixed height and min-width for consistency
              alt="stretch mobile icon"
            />
            <img
              src={sm_text_logo}
              className="h-24 w-auto min-w-[10rem]" // Fixed height and min-width for consistency
              alt="stretch mobile text logo"
            />
          </Link>
          <button
            className="md:hidden text-yellow-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row gap-2 md:gap-4 justify-center content-center ml-14`}
          >
            {Links.map((link, i) => (
              <li key={i} className="justify-center content-center">
                <Link
                  to={link.link}
                  className="text-sm md:text-lg text-yellow-300 font-bold m-2 transition-colors hover:text-white"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <a
              href="/consultation"
              className="bg-yellow-300 hover:bg-yellow-500 text-black py-1 px-2 md:py-2 md:px-4 rounded-md justify-center content-center m-2"
            >
              <div className="font-bold text-sm md:text-lg justify-center content-center">
                BOOK YOUR FREE CONSULTATION
              </div>
            </a>
            <a
              href="https://www.clubready.com/signin.asp"
              className="text-sm md:text-lg text-yellow-300 m-2 transition-colors hover:text-white font-bold"
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
