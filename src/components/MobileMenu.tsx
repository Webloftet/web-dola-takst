import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MobileMenu({ close }: { close: () => void }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="absolute top-full left-0 w-full bg-back border-t px-6 py-4 flex flex-col gap-4 z-50 md:hidden">
      <NavLink to="/" onClick={close}>
        Hjem
      </NavLink>

      <div>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex items-center justify-between font-semibold font-primary"
        >
          <span>Tjenester</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {dropdownOpen && (
          <ul className="pl-4 mt-2 flex flex-col gap-2 text-sm">
            <li>
              <NavLink to="/Verdivurdering" onClick={close}>
                Verdivurdering
              </NavLink>
            </li>
            <li>
              <NavLink to="/Tilstand" onClick={close}>
                Tilstandsrapport
              </NavLink>
            </li>
            <li>
              <NavLink to="/Kostnadsestimering" onClick={close}>
                Kostnadsestimering
              </NavLink>
            </li>
            <li>
              <NavLink to="/Raadgivning" onClick={close}>
                Rådgivning
              </NavLink>
            </li>
            <li>
              <NavLink to="/Kvalitetssikring" onClick={close}>
                StandardKontroll
              </NavLink>
            </li>
            <li>
              <NavLink to="/Befaring" onClick={close}>
                Befaring
              </NavLink>
            </li>
          </ul>
        )}
      </div>

      <NavLink to="/om-oss" onClick={close}>
        Om oss
      </NavLink>
      <NavLink to="/kontakt" onClick={close}>
        Kontakt
      </NavLink>
    </div>
  );
}
