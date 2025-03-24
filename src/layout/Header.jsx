import logo from "../assets/images/logo.png";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaEnvelopeOpen,
  FaTwitter,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="container mx-auto flex justify-around py-4 items-center">
      <img
        src={logo}
        className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24"
        alt="my logo created with j and m letters"
      />

      <ul className="flex justify-between w-1/2 items-center">
        <li>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FaSun className="text-dark-text-secondary desktop:text-3xl" />
            ) : (
              <FaMoon className="text-light-text-secondary desktop:text-3xl" />
            )}
          </button>
        </li>
        <li>
          <a
            href="https://github.com/jeff-mz"
            target="_blank"
            className="no-underline"
            rel="noreferrer"
          >
            <FaGithub className="text-light-text-secondary  dark:text-dark-text-secondary hover:text-green-light desktop:text-3xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jafar-mirzapoor-b69b3b293/"
            target="_blank"
            className="no-underline"
            rel="noreferrer"
          >
            <FaLinkedinIn className="text-light-text-secondary  dark:text-dark-text-secondary hover:text-green-light desktop:text-3xl" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/mzj8181"
            target="_blank"
            className="no-underline"
            rel="noreferrer"
          >
            <FaTwitter className="text-light-text-secondary  dark:text-dark-text-secondary hover:text-green-light desktop:text-3xl" />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/qr/G6DFXUI7MZ6QN1"
            target="_blank"
            className="no-underline"
            rel="noreferrer"
          >
            <FaWhatsapp className="text-light-text-secondary  dark:text-dark-text-secondary hover:text-green-light desktop:text-3xl" />
          </a>
        </li>
        <li>
          <a
            href="mailto:jafarmirzapoor11@gmail.com"
            target="_blank"
            className="no-underline"
            rel="noreferrer"
          >
            <FaEnvelopeOpen className="text-light-text-secondary  dark:text-dark-text-secondary hover:text-green-light desktop:text-3xl" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
