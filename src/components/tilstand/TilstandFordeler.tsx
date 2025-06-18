import { motion } from "framer-motion";
import { FileCheck, Search, BadgeCheck } from "lucide-react";

export default function TilstandsInnhold() {
  const vurderes = [
    "Våtrom (fukt, fall, membran)",
    "Konstruksjon og bæresystem",
    "Tak, drenering og grunnmur",
    "Vinduer, dører og overflater",
    "El-anlegg og VVS (visuell vurdering)",
  ];

  const situasjoner = [
    "Før boligsalg (forbruker og eiendomsmegler)",
    "Ved kjøp og budgiving",
    "Ved overtakelse eller reklamasjon",
    "Ved vedlikeholdsplanlegging",
    "Som del av dokumentasjon til bank eller forsikring",
  ];

  const fordeler = [
    "Godkjente takstmenn og NS-sertifisert rapport",
    "Grundig dokumentasjon og bilder",
    "Forklart på forståelig språk",
    "Rask levering og personlig kontakt",
  ];

  return (
    <section className="bg-back px-6 py-20 text-black">
      <div className="max-w-5xl mx-auto space-y-16">

        <motion.div
          className="bg-white rounded-xl shadow-md p-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-4">
            Hva er en tilstandsrapport
          </h2>
          <p className="text-sm md:text-base font-light mb-6">
            En tilstandsrapport er en grundig teknisk gjennomgang av en eiendom, der bygningens tilstand og eventuelle avvik dokumenteres. Rapporten brukes ofte i boligsalg, og skal bidra til trygghet og forutsigbarhet for både kjøper og selger.
          </p>

          <h3 className="font-semibold text-sm mb-2">Hva vurderes i rapporten</h3>
          <ul className="space-y-2">
            {vurderes.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <Search className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-sm font-light">{item}</span>
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
            Når trenger du en tilstandsrapport?
          </h2>
          <ul className="space-y-3">
            {situasjoner.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-sm font-light">{item}</span>
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
            Fordeler med Døla Takst
          </h2>
          <ul className="space-y-3">
            {fordeler.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <BadgeCheck className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-sm font-light">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
