import { Link } from "react-router-dom";

export default function KvalitetssikringHero() {
  return (
    <section className="bg-back px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

        <div className="flex-1 text-black">
          <h1 className="text-3xl md:text-5xl font-bold font-primary leading-tight">
            Kvalitetssikring &<br /> kontroll av bygg og eiendom
          </h1>
          <p className="mt-4 text-base md:text-lg font-light max-w-lg">
            vi hjelper deg med å sikre at bygg lever opp til tekninske krav, standarder og forskrifter
          </p>
          <Link
            to="/kontakt"
            className="inline-block mt-6 border border-black px-6 py-2 font-medium text-sm hover:bg-black hover:text-white transition-colors"
          >
            Bestill kontroll
          </Link>
        </div>

        <div className="flex-1">
          <img
            src="/hero/re-check.png"
            alt="Kvalitetssikring"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
