import logo from "../assets/logo.svg";
import Button from "../components/Button";
import { navLinks } from "../constant";
import hamburgerIcon from "../assets/icon-hamburger.svg";

const Navbar = () => {
  return (
    <nav className="max-container flex items-center justify-between z-10 ">
      <a className="py-5 lg-tablet:py-0" href="#">
        <img src={logo} alt="" />
      </a>
      <ul className="hidden  lg-tablet:flex items-center space-x-8 ">
        {navLinks.map((link) => (
          <li
            key={link}
            className="group hover:border-b-2 hover:border-b-Lime_Green py-6 "
          >
            <a
              className="text-Grayish_Blue  group-hover:text-Dark_Blue duration-150"
              href="#"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center ">
        <Button className="hidden lg-tablet:block">Request Invite</Button>
        <img
          className="lg-tablet:hidden cursor-pointer"
          src={hamburgerIcon}
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
