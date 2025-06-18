import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#f3eee9] border-b border-gray-300">
    {/* Logo + Firmanavn */}
    <div className="flex items-center gap-2">
      <img src="/icon/dola-logo.png" alt="Døla takst logo" className="h-8 w-auto" />
      <span className="text-xl font-semibold text-black">Døla takst</span>
    </div>

    {/* Navigasjonslenker */}
    <div className="flex gap-8 text-black text-sm font-medium">
      <NavLink to="/">Hjem</NavLink>
      <NavLink to="/tjenester">Tjenester</NavLink>
      <NavLink to="/om-oss">Om oss</NavLink>
      <NavLink to="/kontakt">Kontakt</NavLink>
    </div>
  </nav>
  )
};

export default Navbar;
