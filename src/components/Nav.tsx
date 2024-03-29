import { hamburger } from "../assets/icons/index";
import { headerLogo } from "../assets/images/index";

import { navLinks } from "../constants/index";

function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24  hover:text-coral-red transition-colors duration-200">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Menu" width={24} height={24} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
