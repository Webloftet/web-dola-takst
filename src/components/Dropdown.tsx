import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-black font-medium cursor-pointer">
        Tjenester
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 bg-back z-50 px-2 py-2 w-56">
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="/Verdivurdering">Verdivurdering</Link></li>
            <li><Link to="/Tilstand">Tilstandsrapport</Link></li>
            <li><Link to="/Kostnadsestimering">Kostnadsestimering</Link></li>
            <li><Link to="/Raadgivning">Rådgivning</Link></li>
            <li><Link to="/Kvalitetssikring">StandardKontroll</Link></li>
            <li><Link to="/Befaring">Befaring</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}
