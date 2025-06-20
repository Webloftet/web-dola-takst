import { motion } from "framer-motion";
import { SearchCheck, Info, CheckCircle } from "lucide-react";

export default function BefaringDetaljer() {
  const eksempler = [
    "Ved mistanke om fukt eller lekkasje",
    "Ved synlige skader",
    "Som del av tilstandsrapport",
    "Ved overtakelse eller tvist",
  ];

  const inspeksjon = [
    "Synlige skader og avvik",
    "Fuktskader eller misfarging",
    "Riss i mur/konstruksjon",
    "Slitasje, deformasjoner eller feil",
    "Feil ved våtrom, dører, vinduer",
  ];

  const behov = [
    "Ved overtakelse eller tvil i boligkjøp",
    "Når du oppdager skader",
    "I tvist med håndverker eller forsikring",
    "Før salg, som forberedelse",
    "For trygghet og dokumentasjon",
  ];

  return (
    <section className="bg-back px-6 py-20 text-black">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hva er en befaring */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-4">
            Hva er en befaring?
          </h2>
          <p className="text-sm md:text-base font-light mb-6">
            En befaring innebærer en fysisk gjennomgang av eiendommen, hvor takstmann undersøker tekniske forhold og dokumenterer tilstand, avvik og mulige skader. Det kan gjøres som del av takst, rapport, eller uavhengig vurdering.
          </p>

          <h3 className="font-semibold text-sm mb-2">Eksempler:</h3>
          <ul className="space-y-3">
            {eksempler.map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-sm font-light">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-md p-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-4">
            Hva ser vi etter under en inspeksjon?
          </h2>
          <ul className="space-y-3">
            {inspeksjon.map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <SearchCheck className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-sm font-light">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Når bør du bestille */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-4">
            Når bør du bestille befaring?
          </h2>
          <ul className="space-y-3">
            {behov.map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-sm font-light">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
