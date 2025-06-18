import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function VedBoligsalg() {
  const fordeler = [
    "Gir trygghet til potensielle kjøpere",
    "Reduserer risiko for konflikter i etterkant",
    "Kan øke tilliten og salgsverdien",
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
            Ved boligsalg
          </h2>

          <p className="text-sm md:text-base font-light mb-6">
            En kostnadsestimering gir både selger og kjøper et realistisk bilde av eventuelle utbedringskostnader ved eiendommen. Dette kan brukes som grunnlag i prisforhandlinger, eller som beslutningsgrunnlag for om feil bør utbedres før boligen legges ut for salg.
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
