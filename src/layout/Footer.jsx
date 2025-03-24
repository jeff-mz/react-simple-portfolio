import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="w-full h-16 mx-auto px-2">
      <ul className=" w-full mx-auto flex flex-wrap items-center justify-evenly mt-3 text-sm font-medium text-light-text-secondary  dark:text-dark-text-secondary">
        <li>
          <Link
            to="/"
            className="hover:underline text-sm mobile:text-[15px] desktop:text-2xl "
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className="hover:underline text-sm mobile:text-[15px] desktop:text-2xl "
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:underline text-sm mobile:text-[15px] desktop:text-2xl "
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:underline text-sm mobile:text-[15px] desktop:text-2xl "
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
