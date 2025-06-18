import { motion } from "framer-motion";
import { CalendarCheck2, BadgeCheck } from "lucide-react";

export default function TilstandFordeler() {
  const behov = [
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
      <div className="max-w-5xl mx-auto grid gap-12">

        <motion.div
          className="bg-white rounded-xl shadow-md p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-4">
            Når trenger du en tilstandsrapport?
          </h2>
          <ul className="space-y-3">
            {behov.map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <CalendarCheck2 className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-sm font-light">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-md p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-4">
            Fordeler med Døla Takst
          </h2>
          <ul className="space-y-3">
            {fordeler.map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <BadgeCheck className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-sm font-light">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
