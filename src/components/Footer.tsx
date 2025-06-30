import { NavLink } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" bg-footer text-black px-6 py-12 font-primary">
      <a
        href="#top"
        className="max-w-6xl mx-auto flex items-center gap-2 mb-8 text-sm font-medium hover:underline"
      >
        <ArrowUp className="w-4 h-4 animate-bounce text-arrow" />
        Til Toppen
      </a>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-2 text-sm">
          <p>
            <strong>Dola takst og bygg AS</strong>
          </p>
          <p>Bøkkerveien 16</p>
          <p>0559 OSLO</p>
          <p>
            <a href="tel:+4792222222" className="font-bold hover:text-arrow">
              +47 92 22 22 22
            </a>
          </p>
          <p>
            <a
              href="mailto:post@dolataks.no"
              className="font-bold hover:text-arrow"
            >
              post@dolataks.no
            </a>
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="font-bold hover:text-arrow">
              Facebook
            </a>
            <a href="#" className="font-bold hover:text-arrow">
              Twitter
            </a>
            <a href="#" className="font-bold hover:text-arrow">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm font-medium">
          <NavLink
            to="/tjenester"
            className="flex items-center gap-2 hover:underline"
          >
            Våre tjenester
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </NavLink>
          <NavLink
            to="/kontakt"
            className="flex items-center gap-2 hover:underline"
          >
            Kontakt oss
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </NavLink>
          <NavLink
            to="/om-oss"
            className="flex items-center gap-2 hover:underline"
          >
            Om oss
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </NavLink>
        </div>

        <div className="flex justify-end items-start">
          <img
            src="/icon/dola-logo.png"
            alt="Døla takst logo"
            className="h-10 w-auto"
          />
        </div>
      </div>

      <div className="text-center text-white text-xs mt-10">
        Denne nettsiden er designet og utviklet av{" "}
        <a href="https://webloftet.no" className="underline">
          WebLoftet.no
        </a>
      </div>
    </footer>
  );
}
