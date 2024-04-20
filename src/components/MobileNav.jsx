import { navLinks } from "../constant";

const MobileNav = () => {
  return (
    <div
      className="max-container text-center bg-white text-Dark_Blue z-20 py-8  
         rounded-md shadow-2xl"
    >
      <ul className="space-y-6">
        {navLinks.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
