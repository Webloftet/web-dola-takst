import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function VedForsikringssaker() {
  const fordeler = [
    "Dokumentasjon som er tilpasset forsikringsselskapets krav",
    "Objektiv vurdering av skadeomfang",
    "Trygghet for at du får det du har krav på",
  ];

  return (
    <section className="bg-back px-6 py-20 text-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white rounded-xl shadow-md p-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-4">
            Ved forsikringssaker
          </h2>

          <p className="text-sm md:text-base font-light mb-6">
            Ved skade eller uhell er en profesjonell vurdering fra takstmann avgjørende for et rettferdig forsikringsoppgjør. Kostnadsestimatet viser hva det vil koste å utbedre skaden – dokumentert med faglig tyngde.
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
