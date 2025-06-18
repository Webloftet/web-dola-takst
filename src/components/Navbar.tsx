import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="relative flex items-center px-6 py-4 bg-back">
    {/* Logo + Firmanavn */}
    <div className="flex items-center gap-2">
      <img src="/icon/dola-logo.png" alt="Døla takst logo" className="h-8 w-auto" />
      <span className="text-xl font-primary font-bold text-black">Døla takst</span>
    </div>

    {/* Navigasjonslenker */}
    <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-black text-sm font-primary font-semibold">
      <NavLink to="/">Hjem</NavLink>
      <Dropdown />
      <NavLink to="/om-oss">Om oss</NavLink>
      <NavLink to="/kontakt">Kontakt</NavLink>
    </div>
  </nav>
  )
};

export default Navbar;
