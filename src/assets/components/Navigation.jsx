import React from "react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaEnvelopeOpen,
  FaTwitter,
} from "react-icons/fa";
function Navigation() {
  return (
    <header className="max-w-full h-16	flex justify-between items-center flex-col mobile:flex-row mobile:justify-between mobile:items-center px-5 py-2">
      <p className=" font-bold  text-light text-sm desktop:text-3xl">
        Jafar Mirzapoor
      </p>

      <ul className="max-w-40 flex justify-evenly ">
        <li className="mx-2">
          <FaGithub className="text-light hover:text-green-light desktop:text-3xl" />
        </li>
        <li className="mx-2">
          <FaLinkedinIn className="text-light hover:text-green-light  desktop:text-3xl" />
        </li>
        <li className="mx-2">
          <FaTwitter className="text-light hover:text-green-light  desktop:text-3xl" />
        </li>
        <li className="mx-2">
          <FaWhatsapp className="text-light hover:text-green-light  desktop:text-3xl" />
        </li>
        <li className="mx-2">
          <FaEnvelopeOpen className="text-light hover:text-green-light  desktop:text-3xl" />
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
