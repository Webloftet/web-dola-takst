import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import Dropdown from "./Dropdown";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 bg-back z-50">
      {/* Logo + Firmanavn */}
      <div className="flex items-center gap-2">
        <img src="/icon/dola-logo.png" alt="Døla takst logo" className="h-8 w-auto" />
        <span className="text-xl font-primary font-bold text-black">Døla takst</span>
      </div>

      {/* Desktop navigasjon */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 text-black text-md font-primary font-semibold">
        <NavLink to="/">Hjem</NavLink>
        <Dropdown />
        <NavLink to="/om-oss">Om oss</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
      </div>

      {/* Mobil menyikon */}
      <button
        className="md:hidden text-black"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobil meny vises ved klikk */}
      {mobileOpen && <MobileMenu close={() => setMobileOpen(false)} />}
    </nav>
  );
};

export default Navbar;
