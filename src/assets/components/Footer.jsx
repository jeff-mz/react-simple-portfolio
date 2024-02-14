import React from "react";

function Footer() {
  return (
    <footer class=" w-full mx-auto p-2 ">
      <ul class=" w-full mx-auto flex flex-wrap items-center justify-evenly mt-3 text-sm font-medium text-gray-200n">
        <li>
          <a
            href="#"
            class="hover:underline text-sm mobile:text-[15px] desktop:text-2xl "
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            class="hover:underline text-sm mobile:text-[15px] desktop:text-2xl "
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#"
            class="hover:underline text-sm mobile:text-[15px] desktop:text-2xl "
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            class="hover:underline text-sm mobile:text-[15px] desktop:text-2xl "
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
