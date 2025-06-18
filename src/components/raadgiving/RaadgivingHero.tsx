import { Link } from "react-router-dom";

export default function RaadgivningHero() {
  return (
    <section className="bg-back px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Tekst */}
        <div className="flex-1 text-black">
          <h1 className="text-3xl md:text-5xl font-bold font-primary leading-tight">
            Faglig rådgivning <br />
            ved kjøp og salg av bolig
          </h1>
          <p className="mt-4 text-base md:text-lg font-light max-w-lg">
            Unngå dyre overraskelser. Vi hjelper deg å ta informerte valg – enten du skal kjøpe eller selge bolig.
          </p>
          <Link
            to="/kontakt"
            className="inline-block mt-6 border border-black px-6 py-2 font-medium text-sm hover:bg-black hover:text-white transition-colors"
          >
            Snakk med en rådgiver
          </Link>
        </div>

        {/* Bilde */}
        <div className="flex-1">
          <img
            src="/hero/re-advise.png"
            alt="Rådgivning"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
