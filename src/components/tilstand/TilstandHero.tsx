import { Link } from "react-router-dom";

export default function TilstandHero() {
  return (
    <section className="bg-back px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Tekst */}
        <div className="flex-1 text-black">
          <h1 className="text-3xl md:text-5xl font-bold font-primary leading-tight">
            Dokumentert tilstandsvurdering <br />
            av bolig eller eiendom
          </h1>
          <p className="mt-4 text-base md:text-lg font-light max-w-lg">
            Vi utarbeider tilstandsrapporter i tråd med gjeldende standarder – nyttig ved salg, kjøp eller tvil om teknisk tilstand.
          </p>
          <Link
            to="/kontakt"
            className="inline-block mt-6 border border-black px-6 py-2 font-medium text-sm hover:bg-black hover:text-white transition-colors"
          >
            Bestill tilstandsrapport
          </Link>
        </div>

        {/* Bilde */}
        <div className="flex-1">
          <img
            src="/hero/re-takst.png"
            alt="Tilstandsvurdering"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
