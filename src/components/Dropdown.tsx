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
      <button className="flex items-center gap-1 text-black font-primary font-semibold cursor-pointer">
        Tjenester
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {open && (
          <div className="absolute top-full left-0 border border-gray-400 bg-back z-50 px-2 py-2 w-56 rounded-lg shadow-lg">
            <ul className="flex flex-col text-sm">
              <li>
                <Link
                    to="/verdivurdering"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Verdivurdering
                </Link>
              </li>
              <li>
                <Link
                    to="/tilstand"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Tilstandsrapport
                </Link>
              </li>
              <li>
                <Link
                    to="/kostnadestimering"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Kostnadsestimering
                </Link>
              </li>
              <li>
                <Link
                    to="/raadgiving"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Rådgivning
                </Link>
              </li>
              <li>
                <Link
                    to="/kvalitetssikring"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Standard kontroll
                </Link>
              </li>
              <li>
                <Link
                    to="/befaring"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Befaring
                </Link>
              </li>
            </ul>
          </div>
      )}
    </div>
  );
}
