import Button from "../components/Button";
import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import { navLinks } from "../constant";

const Navbar = ({ handleToggle, toggle }) => {
  return (
    <nav
      id="home"
      className="max-container flex items-center justify-between z-10 "
    >
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
        <div onClick={handleToggle} className="lg-tablet:hidden cursor-pointer">
          {!toggle ? (
            <img src={hamburgerIcon} alt="" />
          ) : (
            <img src={closeIcon} alt="" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
