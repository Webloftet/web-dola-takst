import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function VedRefinansiering() {
  const fordeler = [
    "Støtter lånesøknaden med teknisk dokumentasjon",
    "Avdekker skjulte utbedringsbehov før ny finansiering",
    "Øker transparens mellom deg og banken",
  ];

  return (
    <section className="bg-back px-6 py-20 text-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white rounded-xl shadow-md p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-4">
            Ved refinansiering
          </h2>

          <p className="text-sm md:text-base font-light mb-6">
            Banker og finansinstitusjoner krever ofte en teknisk vurdering ved refinansiering. En takstmanns kostnadsestimat viser hvorvidt det er behov for vedlikehold eller utbedringer, og påvirker bankens vurdering av boligens verdi og sikkerhet.
          </p>

          <h3 className="font-semibold text-sm mb-3">Fordeler:</h3>
          <ul className="space-y-3">
            {fordeler.map((punkt, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-sm font-light">{punkt}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
