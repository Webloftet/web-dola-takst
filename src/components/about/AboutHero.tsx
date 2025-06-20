import { Link } from "react-router-dom";
import { useState } from "react";

export default function Abouthero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section className="bg-back px-6 py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div
          className={`flex-1 text-black transition-opacity duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold font-primary leading-tight">
            Takst med integritet, <span>nøyaktighet og lokal forankring</span>
          </h1>
          <p className="mt-4 text-base md:text-lg font-light max-w-lg">
            Døla Takst holder til i Oslo, men har dype røtter i Lillehammer og
            Gudbrandsdalen. Det gir oss en unik forståelse av både urban
            arkitektur og tradisjonell hyttestandard.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 border border-black px-6 py-2 font-medium text-sm hover:bg-black hover:text-white transition-colors"
          >Våre tjenester</Link>
        </div>
        <div className="flex-1 relative">
        {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <img
            src="/hero/re-hjelp.png"
            alt="bilde av mann og kvinne i byggebransjen"
            className={`w-full h-auto object-contain transition-opacity duration-700 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="eager"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
}
