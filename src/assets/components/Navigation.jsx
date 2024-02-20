import React from "react";
import logo from "../images/logo.png";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaEnvelopeOpen,
  FaTwitter,
} from "react-icons/fa";
function Navigation() {
  return (
    <header className=" container mx-auto flex justify-around py-4 items-center ">
      <img
        src={logo}
        className=" w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24"
        alt="my logo created with j and m letters"
      />

      <ul className="flex justify-between w-1/2">
        <li>
          <a
            href="https://huemint.com/"
            target="_blank"
            className="no-underline"
          >
            <FaGithub className="text-light hover:text-green-light desktop:text-3xl" />
          </a>
        </li>
        <li>
          <a
            href="https://huemint.com/"
            target="_blank"
            className="no-underline"
          >
            <FaLinkedinIn className="text-light hover:text-green-light  desktop:text-3xl" />
          </a>
        </li>
        <li>
          <a
            href="https://huemint.com/"
            target="_blank"
            className="no-underline"
          >
            <FaTwitter className="text-light hover:text-green-light  desktop:text-3xl" />
          </a>
        </li>
        <li>
          <a
            href="https://huemint.com/"
            target="_blank"
            className="no-underline"
          >
            <FaWhatsapp className="text-light hover:text-green-light  desktop:text-3xl" />
          </a>
        </li>
        <li>
          <a
            href="https://huemint.com/"
            target="_blank"
            className="no-underline"
          >
            <FaEnvelopeOpen className="text-light hover:text-green-light  desktop:text-3xl" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
