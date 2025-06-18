import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative bg-[url('/hero/resize-bg.png')] bg-no-repeat bg-cover bg-center text-black md:min-h-screen"
    >
      {/* Overlay for lesbarhet (valgfritt) */}
      <div className="absolute inset-0 bg-gradient-to-r from-back/80 via-back/40 to-transparent md:hidden z-0" />

      {/* Innhold */}
      <div className="relative px-6 py-24 max-w-4xl z-10 lg:ml-22">
        <h1 className="text-3xl md:text-5xl font-bold font-primary leading-tight">
          Verdi & takstvurdering <br /> for bolig og næring
        </h1>
        <p className="mt-4 text-base md:text-lg font-light">
          Vi tilbyr profesjonell taksering av alle typer eiendommer
        </p>
        <Link
          to="/om-oss"
          className="inline-block mt-6 border border-black px-6 py-2 font-medium text-sm hover:bg-black hover:text-white transition-colors"
        >
          Om oss
        </Link>
      </div>
    </section>
  );
}
