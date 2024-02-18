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
    <header className="max-w-full h-16 	flex justify-between items-center flex-col mobile:flex-row mobile:justify-between mobile:items-center px-5 py-1">
      <img
        src={logo}
        alt="my logo created with j and m letters"
        className="w-12"
      />

      <ul className="max-w-40 flex justify-evenly ">
        <li className="mx-2">
          <a
            href="https://huemint.com/"
            target="_blank"
            className="no-underline"
          >
            <FaGithub className="text-light hover:text-green-light desktop:text-3xl" />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://huemint.com/"
            target="_blank"
            className="no-underline"
          >
            <FaLinkedinIn className="text-light hover:text-green-light  desktop:text-3xl" />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://huemint.com/"
            target="_blank"
            className="no-underline"
          >
            <FaTwitter className="text-light hover:text-green-light  desktop:text-3xl" />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://huemint.com/"
            target="_blank"
            className="no-underline"
          >
            <FaWhatsapp className="text-light hover:text-green-light  desktop:text-3xl" />
          </a>
        </li>
        <li className="mx-2">
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
