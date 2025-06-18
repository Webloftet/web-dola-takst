import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="bg-back px-6 py-16 text-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-xl md:text-3xl font-bold font-primary mb-4">
            Om oss
          </h2>
          <p className="text-sm md:text-base font-light max-w-md">
            Vi er ett erfarent takstfirma med base i Oslo, og har spesialisert
            oss på verdi og tilstandsvurdering av boliger og næringseiendom
          </p>

          <NavLink
            to="/om-oss"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium group"
          >
            Les mer
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </NavLink>
        </div>

        <div className="flex-1">
          <img
            src="/img/om-oss.png"
            alt="Om oss"
            className="w-full h-50 object-contain hidden md:flex"
          />
        </div>
      </div>
    </section>
  );
}
